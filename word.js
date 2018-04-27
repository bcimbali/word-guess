var Letter = require('./letter');

var Word = function(word) {
    this.word = word,
    this.wordArray = [],
    // this.createArray = function() {
    //     for (var i = 0; i < this.word.length; i++) {
    //         this.wordArray.push(this.word.charAt(i));
    //     }
    this.addLetter = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push(new Letter(this.word.charAt(i)));
        }
    },
    this.displayWord = function() {
        var tempArray = [];
        // this.wordArray[1].checkLetter('r');
        for (var i = 0; i < this.wordArray.length; i++) {
            tempArray.push(this.wordArray[i].displayLetter());
        }
        var tempArrayString = tempArray.join(' ');
        console.log(tempArrayString);
    },
    this.checkWord = function(guess) {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].checkLetter(guess);
        }
    },
    this.checkWin = function() {
		for (var i=0; i < this.wordArray.length; i++) {
			if (this.wordArray[i] === '_') return false;
		}
		return true;
	}
}

// var wordTest = new Word('arkansas');
// wordTest.createArray();
// wordTest.addLetter();
// wordTest.checkWord('a');
// wordTest.displayWord();
// console.log(wordTest);

module.exports = Word;