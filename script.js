window.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".question button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var isCorrect = this.getAttribute("data-correct") === "true";

      if (isCorrect) {
        alert("Correct! 👍");
        this.classList.add("correct");
      } else {
        alert("Incorrect! 👎");
        this.classList.add("incorrect");
      }

      var allButtons = this.closest(".question").querySelectorAll("button");
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].disabled = true;
      }
    });
  }

  var form = document.querySelector(".query-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
      } else {
        alert("Thank you for your message, " + name + "!");
        form.reset();
      }
    });
  }
});
