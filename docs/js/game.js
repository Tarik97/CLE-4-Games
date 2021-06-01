import { Level } from "./Level.js";
class Game {
    constructor() {
        const level1 = new Level("B_s", "u", ["a", "u", "o", "i"]);
        console.log('Game was created.');
        this.levels = [];
        this.levels.push(level1);
    }
}
new Game();
//# sourceMappingURL=Game.js.map