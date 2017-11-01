////WHILE loop guessing game
//
//var upper = 100000;
//var randomNumber = getRandomNumber(upper);
//var guess;
//var attempts = 0;
//
//function getRandomNumber(upper) {
//  return Math.floor( Math.random() * upper ) + 1;
//}
//    
//while (guess !== randomNumber) {
//  guess = getRandomNumber(upper);
//  attempts += 1;
//}
//
//document.write('<p>The random number was: <b>' + randomNumber +'</b></p>');
//document.write('<p>It took the computer <b>' + attempts + '</b> attempts to guess the number.</p>');
//
////DO WHILE 
//
//var random = guessingNumber(10);
//var guess;
//var guessCount = 0;
//var correctGuess = false;
//
//function guessingNumber(number) {
//  var num = Math.floor( Math.random() * number ) + 1;
//  return num;
//}
//
//do {
//  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//  guessCount += 1;
//  if (parseInt(guess) === random)
//    correctGuess = true;
//} while (!correctGuess)
//  
//document.write('<p>You are right! <b>' + guess +'</b> is the number that the computer thought of.</p>');
//document.write('<p>It took you <b>' + guessCount + '</b> attempts to guess the number.</p>');


////FOR LOOP
//
//for (var i = 0; i < 5; i++) {
//  document.write('<p>This is the count <b>' + i + '</b>.</p>');
//}
//
//var html = '';
//
//for (var i = 0; i <= 20; i++) {
//  html += '<div>' + i + '</div>';
//}
//
//document.write(html);

//Using a FOR LOOP to print out Colors 1st way
var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i <= 10; i++) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);

//Using a FOR LOOP to print out Colors Shorter (Refactored) 2nd way
var html = '';
var rgbColor;

  //Function to generate a random number for RGB
function randomRGB() {
  return Math.floor( Math.random() * 256 );
}

  //Function to generate a random color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

  //Function to print out message
function print(message) {
  document.write(message);
}

for (var i = 0; i <= 10; i++) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
