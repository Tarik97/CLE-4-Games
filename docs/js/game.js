import { Level } from "./Level.js";
import { Character } from "./Character.js";
class Game {
    constructor() {
        this.levels = [];
        this.characters = [];
        this.levels = [];
        const level1 = new Level("B_s", "u", ["a", "u", "o", "i"]);
        this.selectRandomCharacter(level1);
        this.selectRandomCharacter(level1);
        this.selectRandomCharacter(level1);
        this.selectRandomCharacter(level1);
        this.spawnElement = document.querySelector('charcontainer');
        this.gameloop();
    }
    gameloop() {
        for (const Characters of this.characters) {
            Characters.update();
            requestAnimationFrame(() => this.gameloop());
        }
    }
    shuffleArray() {
        this.characters = this.characters
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
    }
    selectRandomCharacter(level) {
        let randomValue = Math.floor(Math.random() * level.possibilities.length);
        console.log(randomValue);
        if (level.possibilities.length > 0) {
            let c = level.possibilities.splice(randomValue, 1);
            console.log(level.possibilities);
            this.characters.push(new Character(c[0]));
        }
    }
}
new Game();
//# sourceMappingURL=Game.js.map