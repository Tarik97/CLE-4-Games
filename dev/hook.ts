import { Letter } from "./letter.js"
import { Game } from "./game.js"

export class Hook {

    letter : Letter
    outerDiv : HTMLElement;
    div : HTMLElement;
    
    constructor() {
        this.create();
    }

    create() {
        this.outerDiv = document.createElement("outerDiv");
        this.div = document.createElement("hook");

        this.outerDiv.appendChild(this.div);
        document.body.appendChild(this.outerDiv);
    }

    shootHook() {
        if(this.letter = correctChar) {

        }
    }
}