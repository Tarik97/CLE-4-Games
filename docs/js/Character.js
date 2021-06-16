export class Character {
    constructor(value, isCorrect, currenLevel) {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.value = '';
        this.isCorrect = false;
        this.value = value;
        this.charContainer = document.querySelector('charcontainer');
        this.create(isCorrect, currenLevel);
    }
    update() {
    }
    create(isCorrect, currentLevel) {
        this.Characters = document.createElement("characters" + currentLevel);
        this.Characters.classList.add("characters");
        var myString = String(isCorrect);
        this.Characters.id = myString;
        this.charContainer.appendChild(this.Characters);
        this.Characters.innerText = this.value;
        this.x = 0;
    }
    removePreviousCharacters(previousLevel) {
        let prevElement = document.querySelector("characters" + previousLevel);
        this.charContainer.removeChild(prevElement);
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