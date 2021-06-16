export class Level {

    public word: string
    public correctAnswer: string
    private _possibilities: string[]

    public get possibilities(): string[] {
        return this._possibilities
    }
    public set possibilities(value: string[]) {
        this._possibilities = value
    }



    constructor(word: string, correctAnswer: string, possibilities: string[]) {
        this.word = word
        this.correctAnswer = correctAnswer
        this._possibilities = possibilities
    }
}