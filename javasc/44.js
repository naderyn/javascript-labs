var randomNumber =1 ; 
var i = 0 ; 
var flag = false;

while (i < 3) {
  var guess = prompt("Guess a number between 1 and 10: number of guesses " + i);

  if (guess == randomNumber) {
    alert("Good work!");

    flag = true;
    
    break;
  } else {
    i++;
      if (!confirm("Wrong guess, want to try again? number of guesses " + i)) 
        break;

  }
}

if(!flag)
    alert("Game over! number of guesses " + i);