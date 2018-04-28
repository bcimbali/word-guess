var Word = require('./word');
var inquirer = require("inquirer");

var guessesLeft = 5;

var states = ['alabama', 
                'alaska', 
                'arizona', 
                'arkansas', 
                'california', 
                'colorado',
                'connecticut', 
                'delaware', 
                'florida', 
                'georgia', 
                'hawaii', 
                'idaho', 
                'illinois',
                'indiana', 
                'iowa', 
                'kansas', 
                'kentucky', 
                'louisiana', 
                'maine', 
                'maryland',
                'massachusetts', 
                'michigan', 
                'minnesota', 
                'mississippi', 
                'missouri', 
                'montana',
                'nebraska', 
                'nevada', 
                'new-hampshire', 
                'new-jersey', 
                'new-mexico', 
                'new-york',
                'north-carolina', 
                'north-dakota', 
                'ohio', 
                'oklahoma', 
                'oregon', 
                'pennsylvania', 
                'rhode-island',
                'south-carolina', 
                'south-dakota', 
                'tennessee', 
                'texas', 
                'utah', 
                'vermont', 
                'virginia', 
                'washington', 
                'west-virginia',
                'wisconsin', 
                'wyoming',
                'district-of-columbia'];

var randomNumber = Math.floor((Math.random() * states.length));

var chosenState = states[randomNumber];

var GameWord = new Word(chosenState);

GameWord.addLetter();

var askQuestion = function() {
    if (guessesLeft > 0) {

        inquirer.prompt([
            {
                name: 'guess',
                message: 'Guess a letter'
            }
        ]).then(function(answers) {
            var sanitizeGuess = answers.guess.toLowerCase();
            if (GameWord.word.includes(sanitizeGuess)) {
                console.log('CORRECT!!!!!');
            }
            if (!GameWord.word.includes(sanitizeGuess)) {
                console.log('INCORRECT!!!!');
                guessesLeft--;
            }
            
            GameWord.checkWord(sanitizeGuess);
            GameWord.displayWord();
            console.log('Guesses Remaining: ' + guessesLeft);

            if (GameWord.word === GameWord.checkWin()) {
                guessesLeft = -5;
            }

            askQuestion();
        });
    }
    else if (guessesLeft === 0) {
        console.log('You Lose.\nPlay Again?');
    }
    else if (guessesLeft === -5) {
        console.log('YOU WIN!\nNICE JOB!');
    }
}

GameWord.displayWord();
console.log('Guesses Remaining: ' + guessesLeft);
askQuestion();

