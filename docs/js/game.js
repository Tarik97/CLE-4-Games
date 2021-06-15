import { Level } from "./Level.js";
import { Character } from "./Character.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.currentLevel = 0;
        this.level1 = new Level("B_s", "u", ["a", "u", "o", "i", "x"]);
        this.clickHandler = (e) => {
            if (e.target.id == "true") {
                console.log("Correct answer!!");
                this.currentLevel += 1;
                this.displayText(true);
            }
            else {
                console.log("wrong answer :(");
                this.displayText(false);
            }
        };
        this.wordElement = document.querySelector("word");
        this.currentWordText = document.createElement("currentWordText");
        this.currentWordText.innerText = this.level1.word;
        this.wordElement.appendChild(this.currentWordText);
        this.icon = document.createElement("icon");
        this.wordElement.appendChild(this.icon);
        document.getElementById("foreground").addEventListener("click", this.clickHandler);
        if (this.currentLevel == 0) {
            this.spawnElement = document.querySelector('charcontainer');
            this.spawnCharacters(this.level1);
        }
    }
    spawnCharacters(level1) {
        length = level1.possibilities.length;
        for (let i = 0; i < length; i++) {
            this.selectRandomCharacter(level1);
        }
    }
    displayText(correct) {
        if (correct) {
            this.icon.classList.remove("incorrect");
            this.icon.classList.add("correct");
            this.icon.innerText = "correct";
            this.currentWordText.innerText = "Bus";
        }
        else {
            this.icon.innerText = "incorrect";
            this.icon.classList.remove("correct");
            this.icon.classList.add("incorrect");
        }
    }
    selectRandomCharacter(level) {
        let randomValue = Math.floor(Math.random() * level.possibilities.length);
        if (level.possibilities.length > 0) {
            let c = level.possibilities.splice(randomValue, 1);
            if (c[0] == this.level1.correctAnswer) {
                this.characters.push(new Character(c[0], true));
            }
            else {
                this.characters.push(new Character(c[0], false));
            }
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map