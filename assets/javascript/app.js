$(document).ready(function() {
  var time = 40;
  var correctAnswers;
  var incorrectAnswers;
  var unAnswered;
  var clockRunning = false;
  var intervalID;
  // making an id for the button called 'StartButton' did not work for some reason, but having just 'button' works??????
  $("button").on("click", function() {
    $("#start").hide();
    $("#main").show();
    run();
    clockRunning = true;
  });

  if (time === 0) {
    $("#main").hide();
    $("#results").show();
    clockRunning = false;
  }

  if (clockRunning) {
  }

  function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
    $("#timer").text("Time Remaining: " + time);
  }
  //count down function

  //When the clockRunning variable is TRUE then run a setInterval to reduce our timer
  // by 1  every second

  //   When our time has reached 0 then turn off our
});
