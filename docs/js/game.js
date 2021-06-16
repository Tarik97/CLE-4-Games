import { Level } from "./Level.js";
import { Character } from "./Character.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.currentLevel = 0;
        this.previousLevel = 0;
        this.level1 = new Level("B_s", "u", ["a", "u", "o", "i", "x"]);
        this.level2 = new Level("T_s", "a", ["r", "a", "i", "u", "v"]);
        this.level3 = new Level("P_n", "e", ["h", "f", "e", "o", "a"]);
        this.level4 = new Level("G_m", "u", ["p", "u", "o", "i", "q"]);
        this.level5 = new Level("t_st", "e", ["e", "u", "g", "i", "q"]);
        this.clickHandler = (e) => {
            if (e.target.id == "true") {
                console.log("Correct answer!!");
                this.currentLevel += 1;
                this.displayText(true);
                this.createLevel(this.levels[this.currentLevel]);
            }
            else {
                console.log("wrong answer :(");
                this.displayText(false);
            }
        };
        this.levels = [this.level1, this.level2, this.level3, this.level4];
        document.getElementById("foreground").addEventListener("click", this.clickHandler);
        if (this.currentLevel == 0) {
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel);
            this.createLevel(this.levels[this.currentLevel]);
        }
    }
    createLevel(level) {
        length = level.possibilities.length;
        this.wordElement = document.querySelector("word");
        this.currentWordText = document.createElement("currentWordText" + this.currentLevel);
        this.currentWordText.innerText = level.word;
        this.wordElement.appendChild(this.currentWordText);
        this.icon = document.createElement("icon" + this.currentLevel);
        this.icon.classList.add("icon");
        this.wordElement.appendChild(this.icon);
        if (this.currentLevel > 0) {
            this.previousLevel = this.currentLevel - 1;
            console.log(this.previousLevel);
            let x = document.querySelector("currentWordText" + this.previousLevel);
            let y = document.querySelector("icon" + this.previousLevel);
            this.wordElement.removeChild(x);
            this.wordElement.removeChild(y);
            for (let i = 0; i < this.characters.length; i++) {
                this.characters[0].removePreviousCharacters(this.previousLevel);
            }
        }
        console.log(this.currentWordText.innerHTML);
        for (let i = 0; i < length; i++) {
            let randomValue = Math.floor(Math.random() * level.possibilities.length);
            if (level.possibilities.length > 0) {
                let c = level.possibilities.splice(randomValue, 1);
                if (c[0] == level.correctAnswer) {
                    this.characters.push(new Character(c[0], true, this.currentLevel));
                }
                else {
                    this.characters.push(new Character(c[0], false, this.currentLevel));
                }
            }
        }
    }
    displayText(correct) {
        if (correct) {
            this.icon.classList.remove("incorrect");
            this.icon.classList.add("correct");
            this.icon.innerText = "correct";
        }
        else {
            this.icon.innerText = "incorrect";
            this.icon.classList.remove("correct");
            this.icon.classList.add("incorrect");
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map