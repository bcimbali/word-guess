var Word = require('./word');
var inquirer = require("inquirer");

var guessesLeft = 5;

var GameWord = new Word('illinois');

// var firstGuess = process.argv[2];

// console.log(GameWord);
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
                // console.log('you guessed correctly!');
            }
            if (!GameWord.word.includes(sanitizeGuess)) {
                console.log('Incorrect! \nGuess Again');
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

// GameWord.checkWord(firstGuess);

GameWord.displayWord();
console.log('Guesses Remaining: ' + guessesLeft);
askQuestion();

