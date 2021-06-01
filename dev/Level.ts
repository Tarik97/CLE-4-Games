export class Level {
    private word : string 
    private correctAnswer : string
    private possibilities : string[]
    /* Optional
        private score : number
        private difficulty : number */

    constructor(w : string, c : string, p : string[]) {
        this.word           = w
        this.correctAnswer  = c
        this.possibilities  = p
    }
}
