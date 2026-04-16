function initPracticeExam() {
	const questionCards = Array.from(document.querySelectorAll(".question-card"));
	const answeredCounter = document.getElementById("answeredCounter");
	const scoreSummary = document.getElementById("scoreSummary");
	const resetBtn = document.getElementById("resetExamBtn");
	const finishBtn = document.getElementById("finishExamBtn");

	const finalResultsBox = document.getElementById("finalResultsBox");
	const finalScoreText = document.getElementById("finalScoreText");
	const finalAnsweredText = document.getElementById("finalAnsweredText");
	const finalPercentText = document.getElementById("finalPercentText");

	if (!questionCards.length) return;

	function getStats() {
		let answered = 0;
		let correct = 0;

		questionCards.forEach((card) => {
			const selected = card.querySelector('input[type="radio"]:checked');
			const correctValue = card.dataset.correct;

			if (selected) {
				answered += 1;
				if (selected.value === correctValue) {
					correct += 1;
				}
			}
		});

		return {
			answered,
			correct,
			total: questionCards.length,
		};
	}

	function updateCounters() {
		const { answered, total } = getStats();

		if (answeredCounter) {
			answeredCounter.textContent = `${answered} / ${total}`;
		}

		if (!scoreSummary) return;

		if (answered === 0) {
			scoreSummary.textContent =
				"Answer all the questions, then click “Show Final Results”.";
		} else if (answered < total) {
			scoreSummary.textContent = `You have answered ${answered} out of ${total} questions. Final score stays hidden until you finish.`;
		} else {
			scoreSummary.textContent =
				"All questions answered. Click “Show Final Results” when you are ready.";
		}
	}

	function revealQuestionState(card, selectedValue) {
		const correctValue = card.dataset.correct;
		card.classList.add("is-answered");

		const options = card.querySelectorAll(".option-card");
		options.forEach((option) => {
			option.classList.remove("is-selected", "is-correct");

			const optionValue = option.dataset.option;

			if (optionValue === selectedValue) {
				option.classList.add("is-selected");
			}

			if (optionValue === correctValue) {
				option.classList.add("is-correct");
			}
		});

		const result = card.querySelector(".question-result");
		if (!result) return;

		if (selectedValue === correctValue) {
			result.textContent = "✓ Your selected answer is correct.";
			result.className = "question-result correct";
		} else {
			result.textContent = `✕ Your selected answer is not correct. The correct answer is ${correctValue}.`;
			result.className = "question-result incorrect";
		}
	}

	function lockAnsweredQuestion(card, selectedValue) {
		card.dataset.answered = "true";
		card.dataset.selected = selectedValue;
		revealQuestionState(card, selectedValue);
		updateCounters();
	}

	function bindQuestionEvents(card) {
		const radios = card.querySelectorAll('input[type="radio"]');

		radios.forEach((radio) => {
			radio.addEventListener("change", () => {
				const alreadyAnswered = card.dataset.answered === "true";

				if (alreadyAnswered) {
					radio.checked = radio.value === card.dataset.selected;
					return;
				}

				lockAnsweredQuestion(card, radio.value);
			});
		});
	}

	function showFinalResults() {
		const { answered, correct, total } = getStats();
		const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

		if (finalScoreText) {
			finalScoreText.textContent = `${correct} / ${total}`;
		}

		if (finalAnsweredText) {
			finalAnsweredText.textContent = `${answered} / ${total}`;
		}

		if (finalPercentText) {
			finalPercentText.textContent = `${percent}%`;
		}

		if (finalResultsBox) {
			finalResultsBox.classList.add("is-visible");
		}
	}

	function resetExam() {
		questionCards.forEach((card) => {
			delete card.dataset.answered;
			delete card.dataset.selected;

			card.classList.remove("is-answered");

			const radios = card.querySelectorAll('input[type="radio"]');
			radios.forEach((radio) => {
				radio.checked = false;
			});

			const options = card.querySelectorAll(".option-card");
			options.forEach((option) => {
				option.classList.remove("is-selected", "is-correct");
			});

			const result = card.querySelector(".question-result");
			if (result) {
				result.textContent = "";
				result.className = "question-result";
			}
		});

		if (finalResultsBox) {
			finalResultsBox.classList.remove("is-visible");
		}

		updateCounters();
	}

	questionCards.forEach(bindQuestionEvents);

	if (finishBtn) {
		finishBtn.addEventListener("click", showFinalResults);
	}

	if (resetBtn) {
		resetBtn.addEventListener("click", resetExam);
	}

	updateCounters();
}
