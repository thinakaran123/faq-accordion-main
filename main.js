document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questionset");
  const answers = document.querySelectorAll(".answer");

  // Keyboard function
  questions.forEach((question, index) => {
    question.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "Enter":
          toggleAnswer(question);
          break;
        case "ArrowDown":
          focusNextQuestion(questions, index);
          break;
        case "ArrowUp":
          focusPreviousQuestion(questions, index);
          break;
      }
    });
  });

  function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector(".plus1");
    const minusIcon = question.querySelector(".minus1");

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      answer.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  }

  function focusNextQuestion(questions, currentIndex) {
    if (currentIndex < questions.length - 1) {
      questions[currentIndex + 1].focus();
    }
  }

  function focusPreviousQuestion(questions, currentIndex) {
    if (currentIndex > 0) {
      questions[currentIndex - 1].focus();
    }
  }

  // Mouse function
  const wholeQuestions = document.querySelectorAll(".wholequestion");
  wholeQuestions.forEach((ques) => {
    ques.addEventListener("click", function () {
      const plusIcon = ques.querySelector(".plus1");
      const minusIcon = ques.querySelector(".minus1");
      const answer = ques.querySelector(".answer");

      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      } else {
        answer.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
      }
    });
  });

  minusIcons.forEach((min) => {
    min.addEventListener("click", function (event) {
      event.stopPropagation();
      const answer = min.parentElement.nextElementSibling;
      const plusIcon = min.previousElementSibling;

      min.style.display = "none";
      plusIcon.style.display = "block";
      answer.style.display = "none";
    });
  });
});
