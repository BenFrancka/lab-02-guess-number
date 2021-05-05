// import functions and grab DOM elements
import {compareNumbers} from './utils.js';

//DOM elements
const numberChoice = document.getElementById('number-chooser');
const pickNumberButton = document.getElementById('pick-number-button');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');
let remainingTurns = document.getElementById('turns-remaining');


// initialize state
// correctNumber logs a random number between 1 and 20
let correctNumber = Math.ceil(Math.random() * 20);

//sets initial state of number of turns to 3 to start the game
remainingTurns = 3;


// set event listeners to update state and DOM
pickNumberButton.addEventListener('click', () => {
    //on click, use one turn
    remainingTurns--;
    if(remainingTurns === 0)
        return;
    //convert guess to a number
    let userGuess = +(numberChoice.value);

    //write if esle statement with compareNumbers funtion inside and message displays
    if(compareNumbers(correctNumber, userGuess) === 1) {

    }
    
};