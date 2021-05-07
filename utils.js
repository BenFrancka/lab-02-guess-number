export {compareNumbers};

function compareNumbers(correctNumber, userGuess) {
    if (correctNumber > userGuess) {
        return -1;
    }if (correctNumber < userGuess) {
        return 1;
    }
    return 0;
    
}