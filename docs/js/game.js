import { Level } from "./Level.js";
import { Character } from "./Character.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.currentLevel = 0;
        this.level1 = new Level("B_s", "u", ["a", "u", "o", "i", "x"]);
        this.level2 = new Level("T_s", "a", ["r", "a", "i", "u", "v"]);
        this.level3 = new Level("P_n", "e", ["h", "f", "e", "o", "a"]);
        this.level4 = new Level("G_m", "u", ["p", "u", "o", "i", "q"]);
        if (this.currentLevel == 0) {
            this.spawnCharacters(this.level1);
        }
        this.spawnElement = document.querySelector('charcontainer');
        document.getElementById("foreground").addEventListener("click", this.clickHandler);
    }
    clickHandler(e) {
        let target = e.target;
        console.log(target.innerText);
    }
    spawnCharacters(level1) {
        length = level1.possibilities.length;
        for (let i = 0; i < length; i++) {
            this.selectRandomCharacter(level1);
        }
    }
    selectRandomCharacter(level) {
        let randomValue = Math.floor(Math.random() * level.possibilities.length);
        if (level.possibilities.length > 0) {
            let c = level.possibilities.splice(randomValue, 1);
            this.characters.push(new Character(c[0]));
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map