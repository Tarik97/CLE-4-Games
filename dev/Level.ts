export class Level {
    private word : string 
    private correctAnswer : string
    private possibilities : string[]
 
    /* Optional
        private score : number
        private difficulty : number */
    public getCharacters() : string[] {
        // get random letter from possibilities
        return this.possibilities;
    }
 
    constructor(w : string, c : string, p : string[]) {
        this.word           = w
        this.correctAnswer  = c
        this.possibilities  = p
    }
}