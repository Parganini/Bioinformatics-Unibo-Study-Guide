// script.js

function getProgress() {
    return JSON.parse(localStorage.getItem("aml_progress")) || {};
}

function saveProgress(progress) {
    localStorage.setItem("aml_progress", JSON.stringify(progress));
}

function markComplete(id) {
    const progress = getProgress();
    progress[id] = true;
    saveProgress(progress);
    updateCompletionStatus(id);
    showCompletionFeedback();
}

function updateCompletionStatus(id) {
    const status = document.getElementById("completionStatus");
    if (!status) return;

    const progress = getProgress();

    if (progress[id]) {
        status.textContent = "Completed ✔";
        status.classList.add("done");
    } else {
        status.textContent = "Not completed yet";
        status.classList.remove("done");
    }
}

function showCompletionFeedback() {
    const toast = document.getElementById("completionToast");
    if (!toast) return;

    toast.classList.add("show");

    clearTimeout(window.__amlToastTimer);
    window.__amlToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

function bindCompleteButtons(lectureId) {
    const completeButtons = document.querySelectorAll("[data-complete-lecture]");
    completeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            markComplete(lectureId);
        });
    });
}

function initLecturePage(lectureId) {
    updateCompletionStatus(lectureId);
    bindCompleteButtons(lectureId);
}