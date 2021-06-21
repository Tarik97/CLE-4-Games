export class Character {
    constructor(value, isCorrect, currenLevel, offset) {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 3;
        this.value = '';
        this.isCorrect = false;
        this.value = value;
        this.charContainer = document.querySelector('charcontainer');
        this.create(isCorrect, currenLevel, offset);
    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.onBelt == false) {
            this.xSpeed = 0;
            this.ySpeed = 3;
        }
        else {
            this.xSpeed = 3;
            this.ySpeed = 0;
        }
        if (this.x > window.innerWidth) {
            this.x = -this.character.clientWidth;
        }
        if (this.y > window.innerHeight) {
            this.y = -this.character.clientHeight;
        }
        this.character.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    create(isCorrect, currentLevel, offset) {
        this.character = document.createElement("characters" + currentLevel);
        document.body.appendChild(this.character);
        this.x = offset * 150;
        this.character.classList.add("characters");
        var myString = String(isCorrect);
        this.character.id = myString;
        this.character.innerText = this.value;
    }
    removePreviousCharacters(previousLevel) {
        let prevElement = document.querySelector("characters" + previousLevel);
        this.character.remove();
    }
    getBoundingRect() {
        return this.character.getBoundingClientRect();
    }
}
//# sourceMappingURL=character.js.map