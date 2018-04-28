var Letter = function(alpha) {
    this.letter = alpha;
    this.letterGuessed = false
    this.displayLetter = function() {
        if (this.letterGuessed === true) {
            return this.letter;
        }
        if (this.letter === '-') {
            this.letterGuessed = true;
            return this.letter;
        }
        else {
            return '_';
        }
    }
    this.checkLetter = function(guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
        }
    }
}; 

module.exports = Letter;