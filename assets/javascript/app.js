$(document).ready(function() {
  var time = 70;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var clockRunning = false;
  var intervalId;

  //Trying to think of a better way to store questions and their answers.

  // making an id for the button called 'StartButton' did not work for some reason, but having just 'button' works??????
  $("#startButton").on("click", function() {
    $("#startButton").hide();
    $("#main").show();
    initializeTimer();
  });

  function initializeTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function score() {
    //Go through each radio group
    for (var i = 1; i <= 7; i++) {
      //variable to see if no radio buttons were checked
      var unchecked = true;

      //This line confused me alot because it wasn't clear to me at first that when you assign an HTML element by name to a variable, it will apply every element with that name into your variable, thus becoming an array, I think....
      var question = document.getElementsByName("question" + i);

      //Iterates through the current choices array and looks to see whether a correct or incorrect answer was chosen, and changes the boolean unchecked value to false.
      for (var j = 0; j < question.length; j++) {
        answers = question[j];
        if (answers.value === "correct" && answers.checked) {
          correctAnswers++;
          unchecked = false;
        } else if (answers.value === "incorrect" && answers.checked) {
          incorrectAnswers++;
          unchecked = false;
        }
      }
      //after iterating through the current choices array with no answers selected, unAnswered will increase.
      if (unchecked) {
        unAnswered++;
      }
    }

    //jQuery
    $("#correctAnswer").text("Correct Answers: " + correctAnswers);
    $("#incorrectAnswer").text("Incorrect Answers: " + incorrectAnswers);
    $("#unAnswered").text("Unanswered Questions: " + unAnswered);
    clearInterval(intervalId);
    $("#main").hide();
    $("#results").show();
  }

  //decrement function, decreases the time variable by 1 every second.
  function decrement() {
    if (time === 0) {
      score();
    } else {
      time--;
      $("#timer").text("Time Remaining: " + time);
    }
  }
});
