## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

##HTML
    - header with title of game
    - section explaining the rules to the user
    - a dropdown menu with numbers between 1 and 20
        -Why: object of game is to pick a number between 1-20
    - a button to click to submit guess once number is picked
        -Why: button will be used in the event listener to change state
    - div with a display of whether the guess was too high or too low
    - div with a display of number of tries remaining
    - div with a display of a win or lose result

##JavaScript
    - grab DOM elements:
        - dropdown menu
        - button
        - high/low div
        - tries left div
        - win/lose div

     - Initial state
        - correctNumber = math.ceil(math.random() *20);
        - turnsNumber = 3;

   - compareNumbers() Function:
        - has 2 parameters: 
            - guess
            - correctNumber
        - Returns following values:
            - 0 if numbers are identical
            - -1 if the guessed number is too low
            - 1 if the guessed number is too high
        - write one test for each outcome

   
    
    - Event Listener
        - on button click, change state:
            - call compareNumbers() to check if user's guess is correct:
                - if too high, display "Too High"
                - turnsNumber--;
                    - if turnsNumber === 0:
                        - display lose message
                        - disable game play (return;)
                - if correct guess:
                    - display win message
                    - disable game play (return;)