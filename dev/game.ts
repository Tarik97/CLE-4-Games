
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
    public currentLevel: number = 0
    private previousLevel : number = 0
    /*
    Level currently only usable
    */
    public level1: Level = new Level("B_s", "u", ["a", "u", "o", "i", "x"])
    public level2: Level = new Level("T_s", "a", ["r", "a", "i", "u", "v"])
    public level3: Level = new Level("P_n", "e", ["h", "f", "e", "o", "a"])
    public level4: Level = new Level("G_m", "u", ["p", "u", "o", "i", "q"])
    public level5: Level = new Level("t_st", "e", ["e", "u", "g", "i", "q"])


    public constructor() {
        this.levels = [this.level1, this.level2, this.level3, this.level4]

        //adding click event listener
        document.getElementById("foreground")!.addEventListener("click", this.clickHandler)

        if (this.currentLevel == 0) {

            //the element where the characters get appended to
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel)!
            //sending the level1 variable to the createLevel function
            this.createLevel(this.levels[this.currentLevel])
        }
    }

    //function that spawns characters depending on how many character possibilities there are in the level variable
    private createLevel(level: Level){
        length = level.possibilities.length;

        //where the current word and icon gets appended to
        this.wordElement = document.querySelector("word")!
        //the element wich has the text in it
        this.currentWordText = document.createElement("currentWordText" + this.currentLevel)
        //inner text will be that of the current level's (level1) word

        this.currentWordText.innerText = level.word
        //appending....
        this.wordElement.appendChild(this.currentWordText);

        //the icon element
        this.icon = document.createElement("icon" + this.currentLevel)
        //appending....
        this.icon.classList.add("icon")
        this.wordElement.appendChild(this.icon);

        
        //if its not the first level
        if (this.currentLevel > 0){

            this.previousLevel = this.currentLevel - 1
            console.log(this.previousLevel)

            //remove previous level
            let x : HTMLElement = document.querySelector("currentWordText" + this.previousLevel);
            let y : HTMLElement = document.querySelector("icon" + this.previousLevel);
            this.wordElement.removeChild(x);
            this.wordElement.removeChild(y);

            for (let i: number = 0; i < this.characters.length; i++){
                this.characters[0].removePreviousCharacters(this.previousLevel)
            }
        }
     
        console.log(this.currentWordText.innerHTML)

        // this.currentWordText.innerText = prevLevel.word

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
                    this.characters.push(new Character(c[0], true, this.currentLevel))
                }
                else {
                    this.characters.push(new Character(c[0], false, this.currentLevel))
                }
            }
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
            this.createLevel(this.levels[this.currentLevel])
    
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
}
new Game()