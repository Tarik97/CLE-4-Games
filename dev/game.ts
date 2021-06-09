import { Hook } from "./Hook.js"
import { Tube } from "./Tube.js"
import { Level } from "./Level.js"
import { Character } from "./Character.js"
 
class Game {
    spawnElement : HTMLElement
    div : HTMLElement
    private levels : Level[] = []
    private hook : Hook
    private tube : Tube
    private characters : Character[] = []
 
    constructor() {
        //Level 1: using the word 'Bus'
        this.levels = []
        const level1: Level = new Level("B_s", "u", ["a", "u", "o", "i"])

        this.selectRandomCharacter(level1)
        this.selectRandomCharacter(level1)
        this.selectRandomCharacter(level1)
        this.selectRandomCharacter(level1)


        this.spawnElement = document.querySelector('charcontainer')!;
        this.gameloop()
    }

    //NOT WORKING
    gameloop() {
        for (const Characters of this.characters) {
            Characters.update()
            requestAnimationFrame(() => this.gameloop())
        }
    }

  

    private shuffleArray() {
        this.characters = this.characters
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    }

    private selectRandomCharacter(level : Level) {
        let randomValue =  Math.floor(Math.random() * level.possibilities.length)
        console.log(randomValue);
        
        if(level.possibilities.length > 0) {
        let c = level.possibilities.splice(randomValue, 1) 
        console.log(level.possibilities);
        this.characters.push(new Character(c[0]))
        }
    }
}
 
new Game()