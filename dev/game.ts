
import { Hook } from "./Hook.js"
import { Tube } from "./Tube.js"
import { Level } from "./Level.js"
import { Character } from "./Character.js"

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
    private characters: Character[] = []
    private currentLevel: number = 0
    /*
    Level currently only usable
    */
    public level1: Level = new Level("B_s", "u", ["a", "u", "o", "i", "x"])

    /*
    Future levels (levels shouldnt be made in the game class smh)
    
    public level2 : Level = new Level("T_s", "a", ["r", "a", "i", "u", "v"])
    public level3 : Level = new Level("P_n", "e", ["h", "f", "e", "o", "a"])
    public level4 : Level = new Level("G_m", "u", ["p", "u", "o", "i", "q"])

    */

    public constructor() {
        //where the current word and icon gets appended to
        this.wordElement = document.querySelector("word")!
        //the element wich has the text in it
        this.currentWordText = document.createElement("currentWordText")
        //inner text will be that of the current level's (level1) word
        this.currentWordText.innerText = this.level1.word
        //appending....
        this.wordElement.appendChild(this.currentWordText);

        //the icon element
        this.icon = document.createElement("icon")
        //appending....
        this.wordElement.appendChild(this.icon);

        //adding click event listener
        document.getElementById("foreground")!.addEventListener("click", this.clickHandler)

        if (this.currentLevel == 0) {
            
            //the element where the characters get appended to
            this.spawnElement = document.querySelector('charcontainer')!
            //sending the level1 variable to the spawnCharacters function
            this.spawnCharacters(this.level1)
        }
    }

    //function that spawns characters depending on how many character possibilities there are in the level variable
    private spawnCharacters(level1: Level) {
        length = level1.possibilities.length;
        for (let i: number = 0; i < length; i++) {
            this.selectRandomCharacter(level1)
        }
    }

    /*
    Click handler, checks wether the clicked character is the correct characer, 
    if so calls displayText function to let player know.
    This is where stuff needs to happen to load the new level, or to call the function that loades the new level
    */
    private clickHandler = (e: Event) => {
        if (e.target.id == "true") {
            console.log("Correct answer!!")
            this.currentLevel += 1
            this.displayText(true)

        }
        else {
            console.log("wrong answer :(")
            this.displayText(false)
        }
    }

    /*
    displays whether the clicked character is the correct one by showing text "correct" or "incorrect" 
    and changing the colours
    */
    private displayText(correct: boolean) {
        if (correct) {
            this.icon.classList.remove("incorrect");
            this.icon.classList.add("correct");
            this.icon.innerText = "correct"

        }
        else {
            this.icon.innerText = "incorrect"
            this.icon.classList.remove("correct");
            this.icon.classList.add("incorrect");
        }
    }


    /* 
    selects random characters by taking a random character from the character.possibilites array, then pushing to a character instance, 
    also parces true or false depending if its the correct character. 
    (bad way of doing it, you can see the correct answer when pressing "inspect element" in browser)
    */
    private selectRandomCharacter(level: Level) {

        let randomValue = Math.floor(Math.random() * level.possibilities.length)

        if (level.possibilities.length > 0) {

            let c = level.possibilities.splice(randomValue, 1)

            if (c[0] == this.level1.correctAnswer) {
                this.characters.push(new Character(c[0], true))
            }
            else {
                this.characters.push(new Character(c[0], false))
            }
        }
    }
}
new Game()