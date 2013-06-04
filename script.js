$(document).ready(function() {
  
  var answer = Math.floor((Math.random()*100)+1);
  var oldGuess = 0;
  var changeOldGuess = true;
  var messageText = "message";
  
  function submitGuess(newGuess) {
    
    var guessDiffNew = Math.abs(answer - newGuess);
    var guessDiffOld = Math.abs(answer - oldGuess);

    if (isNaN(newGuess)) {
      changeOldGuess = false;
      return "This is not a number.";
    } else if ((newGuess < 1) || (newGuess > 100)) {
      changeOldGuess = false;
      return "Pick a number between 1 and 100.";
    }
          
    function checkAbs() {
      if (guessDiffNew > 30) {
      $('#messagebox div').attr('class', 'frozen');
      return "You are frozen";
      } else if (guessDiffNew > 20) {
      $('#messagebox div').attr('class', 'cold');
      return "You are cold";
      } else if (guessDiffNew > 10) {
      $('#messagebox div').attr('class', 'warm');
      return "You are warm";
      } else {
      $('#messagebox div').attr('class', 'verywarm');
      return "You are very warm";
      }
    }
    
    function checkDiff() {
      if (oldGuess == 0) {
        return ".";
      } else if (guessDiffNew > guessDiffOld) {
        return " and you are getting colder.";
      } else if (guessDiffNew < guessDiffOld) {
        return " and you are getting warmer.";
      } else {
        return ".";
      }
    }
    
    return (checkAbs() + checkDiff());
        
  }
  
  $('#submit').click(function(){
    
    var newGuess = $('#guess').val();
    if (newGuess == answer) {
      $('#messagebox div').attr('class', 'hot');
      $('#message').html("You are correct! A new number has been selected. Try to guess it.");
      answer = Math.floor((Math.random()*100)+1);
      oldGuess = 0;
      return;
    }

//    messageText = submitGuess(newGuess);
    $('#message').html(submitGuess(newGuess));
    console.log("old guess is " + oldGuess + " and the answer is " + answer);
    if (changeOldGuess) {
      oldGuess = newGuess;
    } else {
      changeOldGuess = true;
    }

  });
  
});