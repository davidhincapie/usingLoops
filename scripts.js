//WHILE loop guessing game

var upper = 100000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
    
while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write('<p>The random number was: <b>' + randomNumber +'</b></p>');
document.write('<p>It took the computer <b>' + attempts + '</b> attempts to guess the number.</p>');

//DO WHILE 

var random = guessingNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function guessingNumber(number) {
  var num = Math.floor( Math.random() * number ) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === random)
    correctGuess = true;
} while (!correctGuess)
  
document.write('<p>You are right! <b>' + guess +'</b> is the number that the computer thought of.</p>');
document.write('<p>It took you <b>' + guessCount + '</b> attempts to guess the number.</p>');


//FOR LOOP

for (var counter = 0; counter < 10; counter++) {
  document.write('<p>This is the count <b>' + counter + '</b>.</p>');
}
