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
        delete progress[id]; // ❌ desmarcar
    } else {
        progress[id] = true; // ✅ marcar
    }

    saveProgress(progress);
    updateCompletionStatus(id);
    updateButtonsState(id);
    showCompletionFeedback(progress[id]);
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

        // Reset classes
        btn.classList.remove("btn-primary", "btn-completed", "icon-btn-primary", "icon-btn-completed");

        if (completed) {
            // COMPLETED STATE (GREEN)
            if (isIcon) {
                btn.classList.add("icon-btn-completed");
                btn.textContent = "✕";
                btn.title = "Mark as not completed";
            } else {
                btn.classList.add("btn-completed");
                btn.textContent = "Mark as Not Completed";
            }
        } else {
            // DEFAULT STATE (PURPLE)
            if (isIcon) {
                btn.classList.add("icon-btn-primary");
                btn.textContent = "✓";
                btn.title = "Mark as completed";
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

// Copy code functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre").forEach(pre => {
        if (pre.parentElement.classList.contains("code-container")) return;

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
});

function highlightPython(code) {
    return code
        // comments
        .replace(/(#.*)/g, '<span class="code-comment">$1</span>')

        // strings
        .replace(/(["'`].*?["'`])/g, '<span class="code-string">$1</span>')

        // keywords
        .replace(/\b(def|return|if|else|elif|for|while|import|from|as|True|False|None)\b/g,
            '<span class="code-keyword">$1</span>')

        // numbers
        .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')

        // functions (simple detection)
        .replace(/\b(print|len|type|range)\b/g,
            '<span class="code-func">$1</span>');
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre code").forEach(block => {
        block.innerHTML = highlightPython(block.innerHTML);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toc = document.querySelector(".toc");
    const tocLinks = document.querySelectorAll(".toc a[href^='#']");
    const sections = Array.from(tocLinks)
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (!toc || !tocLinks.length || !sections.length) return;

    let lastActive = null;

    const setActiveLink = () => {
        const scrollY = window.scrollY;
        const offset = 140;

        let currentSection = sections[0];

        for (const section of sections) {
            if (scrollY + offset >= section.offsetTop) {
                currentSection = section;
            }
        }

        tocLinks.forEach(link => {
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

    setActiveLink();
    window.addEventListener("scroll", setActiveLink, { passive: true });
});