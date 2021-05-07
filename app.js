// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

//DOM elements
const numberChoice = document.getElementById('number-chooser');
const pickNumberButton = document.getElementById('pick-number-button');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');
const remainingTurnsDisplay = document.getElementById('turns-remaining');
const resetButton = document.getElementById('reset-button');
const resultsSection = document.getElementById('results-section');
const totalResult = document.getElementById('result-count');

// initialize state
// correctNumber logs a random number between 1 and 20
let correctNumber = Math.ceil(Math.random() * 20);

//sets initial state of number of turns to 3 to start the game
let remainingTurns = 3;
let wins = 0;
let losses = 0;

// set event listeners to update state and DOM
pickNumberButton.addEventListener('click', () => {
    
    //convert guess to a number
    let userGuess = +(numberChoice.value);

    //displays results section again after clicking reset button
    resultsSection.style.display = 'flex';

    //write if esle statement with compareNumbers funtion inside and message displays
    //degrade number of turns when appropriate
    if (compareNumbers(correctNumber, userGuess) === 1) {
        highOrLow.textContent = `'${userGuess} is too high, try again'`;
        remainingTurns--;
    }

    if (compareNumbers(correctNumber, userGuess) === -1) {
        highOrLow.textContent = `'${userGuess} is too low, try again'`;
        remainingTurns--;
    }

    if (compareNumbers(correctNumber, userGuess) === 0) {
        winOrLose.textContent = `'${userGuess} is correct! You Win!'`;
        pickNumberButton.textContent = 'Game Over';
        pickNumberButton.style.backgroundColor = 'red';
        resetButton.style.display = 'block';
        highOrLow.textContent = '';
        wins++;
        totalResult.textContent = `Wins: ${wins}   Losses: ${losses}`;
    }

    if (remainingTurns < 1) {
        remainingTurnsDisplay.textCotennt = 'You are out of turns!';
        winOrLose.textContent = 'You Lose, Better Luck Next Time!';
        pickNumberButton.textContent = 'Game Over';
        pickNumberButton.style.backgroundColor = 'red';
        resetButton.style.display = 'block';
        highOrLow.textContent = '';
        losses++;
        totalResult.textContent = `Wins: ${wins}   Losses: ${losses}`;
    }

});

//adds event listener to reset the game
resetButton.addEventListener('click', () => {
    
    //resets state
    correctNumber = Math.ceil(Math.random() * 20);
    remainingTurns = 3;  

    //resets CSS stylings to original state, clears string content to an empty string
    resetButton.style.display = 'none';
    pickNumberButton.textContent = 'Make Your Choice!';
    pickNumberButton.style.backgroundColor = 'black';
    highOrLow.textContent = '';
    winOrLose.textContent = '';
    remainingTurnsDisplay.textContent = '';

    //hides results section
    resultsSection.style.display = 'none';

});