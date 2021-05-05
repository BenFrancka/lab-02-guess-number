// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {compareNumbers} from '../utils.js';


const test = QUnit.test;


// case for if correctNumber === userNumber
test('compares correctNumber to userNumber and evaluates whether they are equal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//case for if correctNumber > userNumber
test('compares correctNumber to userNumber and evaluates whether they are equal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//case for if correctNumber < userNumber
test('compares correctNumber to userNumber and evaluates whether they are equal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 12);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});