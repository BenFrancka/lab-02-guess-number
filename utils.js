export {compareNumbers};

function compareNumbers(correctNumber, userGuess) {
    if (correctNumber > userGuess) {
        return -1;
    } else if (correctNumber < userGuess) {
        return 1;
    } else {
        return 0;
    }
    
}