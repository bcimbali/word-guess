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
    };
}

var wordTest = new Word('arkansas');
// wordTest.createArray();
wordTest.addLetter();
console.log(wordTest);