import { Level } from "./Level.js";
import { Character } from "./Character.js";
import { Belt } from "./Belt.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.currentLevel = 0;
        this.previousLevel = 0;
        this.clickHandler = (e) => {
            let target = e.target;
            if (target.id == "true") {
                this.currentLevel += 1;
                this.displayText(true);
                this.createLevel(this.levels[this.currentLevel]);
            }
            else {
                this.displayText(false);
            }
        };
        this.levels.push(new Level("B_s", "u", ["a", "u", "o", "i", "x"]), new Level("T_s", "a", ["r", "a", "i", "u", "v"]), new Level("P_n", "e", ["h", "f", "e", "o", "a"]), new Level("G_m", "u", ["p", "u", "o", "i", "q"]), new Level("t_st", "e", ["e", "u", "g", "i", "q"]));
        this.wordElement = document.querySelector("word");
        this.icon = document.createElement("icon" + this.currentLevel);
        this.icon.classList.add("icon");
        this.wordElement.appendChild(this.icon);
        document.body.addEventListener("click", this.clickHandler);
        if (this.currentLevel == 0) {
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel);
            this.createLevel(this.levels[this.currentLevel]);
        }
        new Belt;
        this.gameloop();
    }
    gameloop() {
        for (let i = 0; i < this.characters.length; i++) {
            this.characters[i].update();
        }
        requestAnimationFrame(() => this.gameloop());
    }
    createLevel(level) {
        this.deletePreviousLevel();
        length = level.possibilities.length;
        this.currentWordText = document.createElement("currentWordText" + this.currentLevel);
        this.currentWordText.innerText = level.word;
        this.wordElement.appendChild(this.currentWordText);
        for (let i = 0; i < length; i++) {
            let randomValue = Math.floor(Math.random() * level.possibilities.length);
            if (level.possibilities.length > 0) {
                let c = level.possibilities.splice(randomValue, 1);
                if (c[0] == level.correctAnswer) {
                    this.characters.push(new Character(c[0], true, this.currentLevel, i));
                }
                else {
                    this.characters.push(new Character(c[0], false, this.currentLevel, i));
                }
            }
        }
    }
    deletePreviousLevel() {
        if (this.currentLevel > 0) {
            this.previousLevel = this.currentLevel - 1;
            let previousWordText = document.querySelector("currentWordText" + this.previousLevel);
            this.wordElement.removeChild(previousWordText);
            for (let i = 0; i < this.characters.length; i++) {
                this.characters[i].removePreviousCharacters(this.previousLevel);
            }
            this.characters = [];
        }
    }
    displayText(correct) {
        if (correct) {
            this.icon.classList.remove("incorrect");
            this.icon.classList.add("correct");
            this.icon.innerText = "";
            this.icon.innerText = "correct";
        }
        else {
            this.icon.classList.remove("correct");
            this.icon.classList.add("incorrect");
            this.icon.innerText = "";
            this.icon.innerText = "incorrect";
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map