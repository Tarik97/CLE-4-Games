import { Hook } from "./Hook.js"
import { Tube } from "./Tube.js"
import { Level } from "./Level.js"

class Game {
    
    private levels : Level[] 
    private hook : Hook
    private tube : Tube

    constructor() {
        //Level 1: using the word 'Bus'
        const level1: Level = new Level("B_s", "u", ["a", "u", "o", "i"])
        console.log('Game was created.')
        
        //Push the first level to an array
        this.levels = []
        this.levels.push(level1)

        /*Optional
         player.score += assignment1.score 
         kan niet, score is private (getter aanmaken)
         */
    }
}

new Game()