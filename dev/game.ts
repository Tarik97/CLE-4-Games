
import { Hook } from "./Hook.js"
import { Tube } from "./Tube.js"
import { Level } from "./Level.js"
import { Character } from "./Character.js"
import { Belt as Belt } from "./Belt.js"

class Game {
    /*
    Variables
    */
    spawnElement: HTMLElement
    wordElement: HTMLElement
    currentWordText: HTMLElement
    icon: HTMLElement
    private levels: Level[] = []
    private hook: Hook
    private tube: Tube
    private belts: Belt[] = []
    private characters: Character[] = []
    public currentLevel: number = 0
    private previousLevel: number = 0

    public constructor() {
        this.levels.push(
            new Level("B_s", "u", ["a", "u", "o", "i", "x"]),
            new Level("T_s", "a", ["r", "a", "i", "u", "v"]),
            new Level("P_n", "e", ["h", "f", "e", "o", "a"]),
            new Level("G_m", "u", ["p", "u", "o", "i", "q"]),
            new Level("t_st", "e", ["e", "u", "g", "i", "q"])
        );
        //where the current word and icon gets appended to
        this.wordElement = document.querySelector("word")!

        //the icon element
        this.icon = document.createElement("icon" + this.currentLevel)
        //appending....
        this.icon.classList.add("icon")
        this.wordElement.appendChild(this.icon);

        //adding click event listener
        document.body.addEventListener("click", this.clickHandler)

        if (this.currentLevel == 0) {

            //the element where the characters get appended to
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel)!
            //sending the level1 variable to the createLevel function
            this.createLevel(this.levels[this.currentLevel])
        }

        for (let i = 0; i < 1; i++) {
            if (i % 2 == 0) {
                this.belts.push(new Belt(i * 50, true));
            } else {
                this.belts.push(new Belt(i * 50, false));
            }

        }
        this.gameloop();
    }

    gameloop() {

        for (const character of this.characters) {
            for (const belt of this.belts) {
                console.log(this.checkOnBelt(character.getBoundingRect(), belt.getBoundingRect()))
                if (this.checkOnBelt(character.getBoundingRect(), belt.getBoundingRect())) {
                    character.onBelt = true
                } else {
                    character.onBelt = false
                }
            }
            character.update()
        }
        requestAnimationFrame(() => this.gameloop())
    }

    //function that spawns characters depending on how many character possibilities there are in the level variable
    private createLevel(level: Level) {

        this.deletePreviousLevel()

        length = level.possibilities.length;


        //the element wich has the text in it
        this.currentWordText = document.createElement("currentWordText" + this.currentLevel)
        //inner text will be that of the current level's (level1) word
        this.currentWordText.innerText = level.word
        //appending....
        this.wordElement.appendChild(this.currentWordText);


        for (let i: number = 0; i < length; i++) {
            /* 
            selects random characters by taking a random character from the character.possibilites array, then pushing to a character instance, 
            also parces true or false depending if its the correct character. 
            (bad way of doing it, you can see the correct answer when pressing "inspect element" in browser)
            */

            let randomValue = Math.floor(Math.random() * level.possibilities.length)

            if (level.possibilities.length > 0) {

                let c = level.possibilities.splice(randomValue, 1)

                if (c[0] == level.correctAnswer) {
                    this.characters.push(new Character(c[0], true, this.currentLevel, i))
                }
                else {
                    this.characters.push(new Character(c[0], false, this.currentLevel, i))
                }
            }
        }
    }


    deletePreviousLevel() {
        //if its not the first level
        if (this.currentLevel > 0) {

            this.previousLevel = this.currentLevel - 1

            //remove previous level
            let previousWordText: HTMLElement = document.querySelector("currentWordText" + this.previousLevel)!;
            // let previousIcon : HTMLElement = document.querySelector("icon" + this.previousLevel)!;
            this.wordElement.removeChild(previousWordText);
            // this.wordElement.removeChild(previousIcon);

            for (let i: number = 0; i < this.characters.length; i++) {
                // this.characters.slice
                this.characters[i].removePreviousCharacters(this.previousLevel)
            }
            this.characters = []
        }
    }
    /*
    Click handler, checks wether the clicked character is the correct characer, 
    if so calls displayText function to let player know.
    This is where stuff needs to happen to load the new level, or to call the function that loades the new level

    works on my machine ¯\_(ツ)_/¯
    */
    private clickHandler = (e: Event) => {
        let target: HTMLElement = e.target
        if (target.id == "true") {
            this.currentLevel += 1
            this.displayText(true)
            this.createLevel(this.levels[this.currentLevel])
        }
        else {
            this.displayText(false)
        }
    }

    /*
    displays whether the clicked character is the correct one by showing text "correct" or "incorrect" 
    and changing the colours
    */
    private displayText(correct: boolean) {
        if (correct) {
            this.icon.classList.remove("incorrect")
            this.icon.classList.add("correct")
            this.icon.innerText = ""
            this.icon.innerText = "correct"
        }
        else {
            this.icon.classList.remove("correct")
            this.icon.classList.add("incorrect")
            this.icon.innerText = ""
            this.icon.innerText = "incorrect"
        }
    }

    private checkOnBelt(characterCollider: ClientRect, beltCollider: ClientRect): boolean {
        return Boolean(characterCollider.bottom <= beltCollider.top && beltCollider.top <= characterCollider.bottom)

    }
}
new Game()