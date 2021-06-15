"use strict";
exports.__esModule = true;
exports.Level = void 0;
var Level = /** @class */ (function () {
    function Level(word, correctAnswer, possibilities) {
        this.word = word;
        this.correctAnswer = correctAnswer;
        this._possibilities = possibilities;
    }
    Object.defineProperty(Level.prototype, "possibilities", {
        get: function () {
            return this._possibilities;
        },
        set: function (value) {
            this._possibilities = value;
        },
        enumerable: false,
        configurable: true
    });
    return Level;
}());
exports.Level = Level;
