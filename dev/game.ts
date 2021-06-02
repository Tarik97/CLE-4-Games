import { Hook } from "./Hook.js"
import { Tube } from "./Tube.js"
import { Level } from "./Level.js"
import { Character } from "./character.js"
 
class Game {
    
    private levels : Level[] = []
    private hook : Hook
    private tube : Tube
    private characters : Character[] = []
 
    constructor() {
        //Level 1: using the word 'Bus'
        const level1: Level = new Level("B_s", "u", ["a", "u", "o", "i"])
        this.createLevel(level1)
        
        this.shuffleArray()
        console.log('Game was created.')
        
        //Push the first level to an array
        this.levels = []
        this.levels.push(level1)
 
        /*Optional
         player.score += assignment1.score 
         kan niet, score is private (getter aanmaken)
         */
        this.selectRandomCharacter()
    }
    private selectRandomCharacter() {
        let randomValue =  Math.floor(Math.random() * this.characters.length)
        let c = this.characters.splice(0, 1) 
        console.log(c);
        
    }
 
    private shuffleArray() {
        console.log(this.characters);
        
 
        this.characters = this.characters
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
 
        console.log(this.characters);
    }
 
    private createLevel(level : Level) {
        for (const c of level.getCharacters()) {
            this.characters.push(new Character(c))
        }
    }
}
 
new Game()