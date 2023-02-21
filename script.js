'use strict';

const resetBtn = document.querySelector('button.again');
const guessBtn = document.querySelector('button.check');
const guessNumber = document.querySelector('input.guess');
const score = document.querySelector('p.label-score');
const userMessage = document.querySelector('p.message');
const displayNumber = document.querySelector('div.number');
let allowedGuesses = 20;
let remainingGuesses = allowedGuesses;

console.log(resetBtn, guessBtn, guessNumber, score, userMessage, displayNumber);

let secretNumber;

const resetGame = () => {
  remainingGuesses = allowedGuesses;
  score.textContent = remainingGuesses;
  userMessage.textContent = `Start Guessing ...`;
  displayNumber.textContent = `?`;
  guessBtn.style.visibility = 'visibile';
  guessNumber.value = '';
  document.querySelector('body').style.backgroundColor = 'black';
};

const endGame = status => {
  if (status === 'success') {
    userMessage.textContent = ` Well done you compled the game in ${
      allowedGuesses - remainingGuesses + 1
    } attempts!
        Click again button to play again!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (status === 'failure') {
    userMessage.textContent = `Sorry you have ran out of guesses!
        Click again button to play again!`;
    document.querySelector('body').style.backgroundColor = 'red';
  }
  displayNumber.textContent = secretNumber;
  guessBtn.style.visibility = 'hidden';
};

const handleGuess = () => {
  //If it's a brand new game. Get the generate a new number...
  if (remainingGuesses === 20) {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  }
  let guessedNumber = Number(guessNumber.value);
  console.log(`The secret number is ${secretNumber}`);
  console.log(`The guessed number is ${guessedNumber}`);
  if (remainingGuesses === 0) {
    endGame('failure');
  } else {
    if (!guessedNumber) {
      userMessage.textContent = `Enter a number to play the game!`;
      remainingGuesses--;
    } else if (guessedNumber === secretNumber) {
      endGame('success');
    } else if (guessedNumber > secretNumber) {
      userMessage.textContent = `Too high!`;
      remainingGuesses--;
    } else if (guessedNumber < secretNumber) {
      userMessage.textContent = `Too low!`;
      remainingGuesses--;
    }
    console.log(remainingGuesses);
    score.textContent = remainingGuesses;
  }
};

guessBtn.addEventListener('click', handleGuess);
resetBtn.addEventListener('click', resetGame);
