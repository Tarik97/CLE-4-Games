export class Character {
    constructor(value, isCorrect, currenLevel, offset) {
        this.x = 0;
        this.y = 0;
        this.speed = 3;
        this.value = '';
        this.isCorrect = false;
        this.value = value;
        this.charContainer = document.querySelector('charcontainer');
        this.create(isCorrect, currenLevel, offset);
    }
    update() {
        console.log("we movin' ");
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.x = -this.character.clientWidth;
        }
        this.character.style.transform = `translate(${this.x}px, 200px)`;
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
    checkOnBelt(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
        this.onBelt = true;
    }
    setSpeed() {
        if (this.onBelt = true) {
            this.speed = 2;
        }
    }
}
//# sourceMappingURL=character.js.map