'use strict';

const resetBtn = document.querySelector('button.again');
const guessBtn = document.querySelector('button.check');
const guessNumber = document.querySelector('input.guess');
const score = document.querySelector('p.label-score');
const userMessage = document.querySelector('p.message');
const displayNumber = document.querySelector('div.number');
let remainingGuesses = 20;

console.log(resetBtn, guessBtn, guessNumber, score, userMessage, displayNumber);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const resetGame = () => {
  remainingGuesses = 20;
  userMessage.textContent = 'Start Guessing ...';
};

const endGame = (status) => {
    if(status === 'success') {
        userMessage.textContent = 
        ` Well done you compled the game in ${20 - remainingGuesses + 1} attempts!
        Click again button to play again!`;
        document.querySelector('body').style.backgroundColor = '#60b347';
    } else if(status === 'failure') {
        userMessage.textContent = 
        `Sorry you have ran out of guesses!
        Click again button to play again!`;
        document.querySelector('body').style.backgroundColor = 'red';
    }
    displayNumber.textContent = secretNumber;
    guessBtn.style.visibility = 'hidden'; 
}

const handleGuess = () => {
  const guessedNumber = Number(guessNumber.value);
  console.log(`The secret number is ${secretNumber}`);
  console.log(guessedNumber);
  if(remainingGuesses === 0) {
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

resetGame();

guessBtn.addEventListener('click', handleGuess);
