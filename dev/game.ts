
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
    icon: HTMLElement
    private levels: Level[] = []
    private hook: Hook
    private tube: Tube
    private belts: Belt[] = []
    private characters: Character[] = []
    public currentLevel: number = 0
    private previousLevel: number = 0

    private wordX : number
    private wordY : number
    private iconX : number
    private iconY : number

    public constructor() {
        this.levels.push(
            new Level("B_s", "u", ["a", "t", "h", "u", "x"]),
            new Level("T_s", "a", ["r", "a", "i", "u", "v"]),
            new Level("P_n", "e", ["h", "f", "e", "o", "a"]),
            new Level("G_m", "u", ["p", "u", "o", "i", "q"]),
            new Level("t_st", "e", ["e", "u", "g", "i", "q"])
        );

        //the icon element
        this.icon = document.createElement("icon" + this.currentLevel)
        //appending....
        this.icon.classList.add("icon")
        document.body.appendChild(this.icon);

        this.iconX = 20
        this.iconY = window.innerHeight - this.icon.clientHeight - 20

        this.icon.style.transform = `translate(${this.iconX}px, ${this.iconY}px)`

        //adding click event listener
        document.body.addEventListener("click", this.clickHandler)

        if (this.currentLevel == 0) {

            //the element where the characters get appended to
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel)!
            //sending the level1 variable to the createLevel function
            this.createLevel(this.levels[this.currentLevel])
        }

        for (let i = 0; i < 4; i++) {
            if (i % 2 == 0) {
                this.belts.push(new Belt(i * 50, true));
            } else {
                this.belts.push(new Belt(i * 50, false));
            }

        }
        this.hook = new Hook
        this.gameloop();
    }

    gameloop() {

        for (const character of this.characters) {
                if (this.checkOnBelt(character.getBoundingRect(), this.belts[0].getBoundingRect())) {
                    character.onBelt = true
                } else {
                    character.onBelt = false
                }
            character.update()
            this.hook.update()
        }
        requestAnimationFrame(() => this.gameloop())
    }

    //function that spawns characters depending on how many character possibilities there are in the level variable
    private createLevel(level: Level) {

        this.deletePreviousLevel()

        length = level.possibilities.length;


        //the element wich has the text in it
        this.wordElement = document.createElement("wordElement" + this.currentLevel)
        //inner text will be that of the current level's (level1) word
        this.wordElement.innerText = level.word

        this.wordElement.classList.add("wordElement")
        //appending....
        document.body.appendChild(this.wordElement);

        this.wordX = window.innerWidth - this.wordElement.clientWidth - 10
        this.wordY = window.innerHeight - this.wordElement.clientHeight

        this.wordElement.style.transform = `translate(${this.wordX}px, ${this.wordY}px)`


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
            // let previousWordText: HTMLElement = document.querySelector("wordElement" + this.previousLevel)!;

            document.body.removeChild(this.wordElement);

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
    private clickHandler = (e: MouseEvent) => {

        // this.hook.shootHook(e.clientX, e.clientY)

        let target: EventTarget | null = e.target
        if (target.id! == "true") {
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
            this.icon.innerText = "Ja! Dat is goed!"
        }
        else {
            this.icon.classList.remove("correct")
            this.icon.classList.add("incorrect")
            this.icon.innerText = ""
            this.icon.innerText = "Probeer het nog een keer!"
        }
    }

    private checkOnBelt(characterCollider: ClientRect, beltCollider: ClientRect): boolean {
        return Boolean(characterCollider.bottom <= beltCollider.top && beltCollider.top <= characterCollider.bottom)

    }
}
new Game()