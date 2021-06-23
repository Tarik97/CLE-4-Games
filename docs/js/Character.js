export class Character {
    constructor(value, isCorrect, currenLevel, offset) {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 3;
        this.isCorrect = false;
        this.value = '';
        this.value = value;
        this.charContainer = document.querySelector('charcontainer');
        this.create(isCorrect, currenLevel, offset);
        this.img = document.createElement("img");
        this.img.classList.add("tile");
        this.img.classList.add("crate");
        this.img.setAttribute("src", "images/crate.png");
        this.character.appendChild(this.img);
        this.img.style.transform = `translate(-200px, px)`;
    }
    update() {
        if (this.onBelt) {
            this.xSpeed = 3;
            this.ySpeed = 0;
        }
        else {
            this.xSpeed = 0;
            this.ySpeed = 3;
        }
        if (this.x > window.innerWidth) {
            this.x = -this.character.clientWidth;
        }
        if (this.y > window.innerHeight) {
            this.y = -this.character.clientHeight;
        }
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
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