export class Level {
    constructor(word, correctAnswer, possibilities) {
        this.word = word;
        this.correctAnswer = correctAnswer;
        this._possibilities = possibilities;
    }
    get possibilities() {
        return this._possibilities;
    }
    set possibilities(value) {
        this._possibilities = value;
    }
}
//# sourceMappingURL=Level.js.map