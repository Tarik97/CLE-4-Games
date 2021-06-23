import { Hook } from "./Hook.js";
import { Level } from "./Level.js";
import { Character } from "./Character.js";
import { Belt as Belt } from "./Belt.js";
class Game {
    constructor() {
        this.levels = [];
        this.belts = [];
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
        this.levels.push(new Level("B_s", "u", ["a", "t", "h", "u", "x"]), new Level("T_s", "a", ["r", "a", "i", "u", "v"]), new Level("P_n", "e", ["h", "f", "e", "o", "a"]), new Level("G_m", "u", ["p", "u", "o", "i", "q"]), new Level("t_st", "e", ["e", "u", "g", "i", "q"]));
        this.icon = document.createElement("icon" + this.currentLevel);
        this.icon.classList.add("icon");
        document.body.appendChild(this.icon);
        this.iconX = 20;
        this.iconY = window.innerHeight - this.icon.clientHeight - 20;
        this.icon.style.transform = `translate(${this.iconX}px, ${this.iconY}px)`;
        document.body.addEventListener("click", this.clickHandler);
        if (this.currentLevel == 0) {
            this.spawnElement = document.querySelector('charcontainer' + this.currentLevel);
            this.createLevel(this.levels[this.currentLevel]);
        }
        for (let i = 0; i < 4; i++) {
            if (i % 2 == 0) {
                this.belts.push(new Belt(i * 50, true));
            }
            else {
                this.belts.push(new Belt(i * 50, false));
            }
        }
        this.hook = new Hook;
        this.gameloop();
    }
    gameloop() {
        for (const character of this.characters) {
            if (this.checkOnBelt(character.getBoundingRect(), this.belts[0].getBoundingRect())) {
                character.onBelt = true;
            }
            else {
                character.onBelt = false;
            }
            character.update();
            this.hook.update();
        }
        requestAnimationFrame(() => this.gameloop());
    }
    createLevel(level) {
        this.deletePreviousLevel();
        length = level.possibilities.length;
        this.wordElement = document.createElement("wordElement" + this.currentLevel);
        this.wordElement.innerText = level.word;
        this.wordElement.classList.add("wordElement");
        document.body.appendChild(this.wordElement);
        this.wordX = window.innerWidth - this.wordElement.clientWidth - 10;
        this.wordY = window.innerHeight - this.wordElement.clientHeight;
        this.wordElement.style.transform = `translate(${this.wordX}px, ${this.wordY}px)`;
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
            document.body.removeChild(this.wordElement);
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
            this.icon.innerText = "Ja! Dat is goed!";
        }
        else {
            this.icon.classList.remove("correct");
            this.icon.classList.add("incorrect");
            this.icon.innerText = "";
            this.icon.innerText = "Probeer het nog een keer!";
        }
    }
    checkOnBelt(characterCollider, beltCollider) {
        return Boolean(characterCollider.bottom <= beltCollider.top && beltCollider.top <= characterCollider.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map