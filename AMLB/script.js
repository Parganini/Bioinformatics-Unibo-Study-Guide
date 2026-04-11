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