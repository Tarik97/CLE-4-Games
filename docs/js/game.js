import { Level } from "./Level.js";
import { Character } from "./Character.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.levels = [];
        const level1 = new Level("B_s", "u", ["a", "u", "o", "i", "x"]);
        this.spawnElement = document.querySelector('charcontainer');
        this.spawnCharacters(level1);
        this.gameloop();
    }
    gameloop() {
    }
    spawnCharacters(level1) {
        let length = level1.possibilities.length;
        for (let i = 0; i < length; i++) {
            this.selectRandomCharacter(level1);
        }
    }
    selectRandomCharacter(level) {
        let randomValue = Math.floor(Math.random() * level.possibilities.length);
        if (level.possibilities.length > 0) {
            let c = level.possibilities.splice(randomValue, 1);
            console.log(level.possibilities);
            this.characters.push(new Character(c[0]));
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map