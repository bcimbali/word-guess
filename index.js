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
            if (GameWord.word.includes(answers.guess)) {
                console.log('you guessed correctly!');
            }
            if (!GameWord.word.includes(answers.guess)) {
                console.log('Incorrect! \nGuess Again');
                guessesLeft--;
            }
            
            GameWord.checkWord(answers.guess);
            GameWord.displayWord();
            console.log('Guesses Remaining: ' + guessesLeft);

            askQuestion();
        });
    }
    else {
        console.log('You Lose.\nPlay Again?');
    }
}

// GameWord.checkWord(firstGuess);

GameWord.displayWord();
console.log('Guesses Remaining: ' + guessesLeft);
askQuestion();

