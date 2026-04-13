// script.js

function getProgress() {
    return JSON.parse(localStorage.getItem("aml_progress")) || {};
}

function saveProgress(progress) {
    localStorage.setItem("aml_progress", JSON.stringify(progress));
}

function isCompleted(id) {
    const progress = getProgress();
    return !!progress[id];
}

function toggleComplete(id) {
    const progress = getProgress();

    if (progress[id]) {
        delete progress[id];
    } else {
        progress[id] = true;
    }

    saveProgress(progress);
    updateCompletionStatus(id);
    updateButtonsState(id);
    showCompletionFeedback(!!progress[id]);
}

function updateCompletionStatus(id) {
    const status = document.getElementById("completionStatus");
    if (!status) return;

    if (isCompleted(id)) {
        status.textContent = "Completed ✔";
        status.classList.add("done");
    } else {
        status.textContent = "Not completed yet";
        status.classList.remove("done");
    }
}

function updateButtonsState(id) {
    const buttons = document.querySelectorAll("[data-complete-lecture]");
    const completed = isCompleted(id);

    buttons.forEach((btn) => {
        const isIcon = btn.classList.contains("icon-btn");

        btn.classList.remove(
            "btn-primary",
            "btn-completed",
            "icon-btn-primary",
            "icon-btn-completed"
        );

        if (completed) {
            if (isIcon) {
                btn.classList.add("icon-btn-completed");
                btn.textContent = "✕";
                btn.title = "Mark as not completed";
                btn.setAttribute("aria-label", "Mark as not completed");
            } else {
                btn.classList.add("btn-completed");
                btn.textContent = "Mark as Not Completed";
            }
        } else {
            if (isIcon) {
                btn.classList.add("icon-btn-primary");
                btn.textContent = "✓";
                btn.title = "Mark as completed";
                btn.setAttribute("aria-label", "Mark as completed");
            } else {
                btn.classList.add("btn-primary");
                btn.textContent = "Mark as Completed";
            }
        }
    });
}

function showCompletionFeedback(isNowCompleted) {
    const toast = document.getElementById("completionToast");
    if (!toast) return;

    toast.textContent = isNowCompleted
        ? "Lecture marked as completed."
        : "Lecture marked as not completed.";

    toast.classList.add("show");

    clearTimeout(window.__amlToastTimer);
    window.__amlToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

function bindCompleteButtons(lectureId) {
    const buttons = document.querySelectorAll("[data-complete-lecture]");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleComplete(lectureId);
        });
    });
}

function initLecturePage(lectureId) {
    updateCompletionStatus(lectureId);
    updateButtonsState(lectureId);
    bindCompleteButtons(lectureId);
}

/* =========================
   Copy code blocks
========================= */

function initCopyButtons() {
    document.querySelectorAll("pre").forEach((pre) => {
        if (pre.parentElement && pre.parentElement.classList.contains("code-container")) {
            return;
        }

        const container = document.createElement("div");
        container.className = "code-container";

        const button = document.createElement("button");
        button.className = "copy-btn";
        button.type = "button";
        button.textContent = "Copy";

        pre.parentNode.insertBefore(container, pre);
        container.appendChild(button);
        container.appendChild(pre);

        button.addEventListener("click", async () => {
            const text = pre.innerText;

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                } else {
                    const textarea = document.createElement("textarea");
                    textarea.value = text;
                    textarea.style.position = "fixed";
                    textarea.style.left = "-9999px";
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    document.execCommand("copy");
                    textarea.remove();
                }

                const oldText = button.textContent;
                button.textContent = "Copied!";

                setTimeout(() => {
                    button.textContent = oldText;
                }, 1500);
            } catch (error) {
                console.error("Copy failed:", error);
                button.textContent = "Failed";

                setTimeout(() => {
                    button.textContent = "Copy";
                }, 1500);
            }
        });
    });
}

/* =========================
   Basic Python highlighting
========================= */

function highlightPython(code) {
    return code
        .replace(/(#.*)/g, '<span class="code-comment">$1</span>')
        .replace(/(["'`].*?["'`])/g, '<span class="code-string">$1</span>')
        .replace(
            /\b(def|return|if|else|elif|for|while|import|from|as|True|False|None|class|try|except|with|in|and|or|not)\b/g,
            '<span class="code-keyword">$1</span>'
        )
        .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
        .replace(/\b(print|len|type|range|sum|min|max|input)\b/g, '<span class="code-func">$1</span>');
}

function initCodeHighlighting() {
    document.querySelectorAll("pre code").forEach((block) => {
        block.innerHTML = highlightPython(block.innerHTML);
    });
}

/* =========================
   TOC behavior
   Desktop: always visible
   Mobile: drawer
========================= */

function initToc() {
    const toc = document.querySelector(".toc");
    const backdrop = document.querySelector(".toc-backdrop");
    const tocLinks = document.querySelectorAll(".toc a[href^='#']");
    const toggleButtons = document.querySelectorAll(".toc-toggle");
    const mobileMedia = window.matchMedia("(max-width: 768px)");

    if (!toc || !tocLinks.length) return;

    const sections = Array.from(tocLinks)
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    let lastActive = null;

    const isMobile = () => mobileMedia.matches;

    const openToc = () => {
        if (!isMobile()) return;
        toc.classList.add("is-open");
        if (backdrop) backdrop.classList.add("is-open");
    };

    const closeToc = () => {
        if (!isMobile()) return;
        toc.classList.remove("is-open");
        if (backdrop) backdrop.classList.remove("is-open");
    };

    const toggleToc = () => {
        if (!isMobile()) return;

        if (toc.classList.contains("is-open")) {
            closeToc();
        } else {
            openToc();
        }
    };

    const setActiveLink = () => {
        if (!sections.length) return;

        const scrollY = window.scrollY;
        const offset = 140;
        let currentSection = sections[0];

        for (const section of sections) {
            if (scrollY + offset >= section.offsetTop) {
                currentSection = section;
            }
        }

        tocLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentSection.id}`;
            link.classList.toggle("active", isActive);

            if (isActive && link !== lastActive) {
                lastActive = link;

                const linkTop = link.offsetTop;
                const linkBottom = linkTop + link.offsetHeight;
                const viewTop = toc.scrollTop;
                const viewBottom = viewTop + toc.clientHeight;

                if (linkTop < viewTop || linkBottom > viewBottom) {
                    link.scrollIntoView({ block: "nearest" });
                }
            }
        });
    };

    toggleButtons.forEach((button) => {
        button.addEventListener("click", toggleToc);
    });

    tocLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeToc();
        });
    });

    if (backdrop) {
        backdrop.addEventListener("click", closeToc);
    }

    window.addEventListener("scroll", setActiveLink, { passive: true });

    window.addEventListener("resize", () => {
        if (!isMobile()) {
            toc.classList.remove("is-open");
            if (backdrop) backdrop.classList.remove("is-open");
        }
        setActiveLink();
    });

    setActiveLink();
}

/* =========================
   Init everything once
========================= */

document.addEventListener("DOMContentLoaded", () => {
    initCopyButtons();
    initCodeHighlighting();
    initToc();
});