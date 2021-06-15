export class Character {
    constructor(value, isCorrect) {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.value = '';
        this.isCorrect = false;
        this.value = value;
        this.spawnElement = document.querySelector('charcontainer');
        this.create(isCorrect);
    }
    update() {
    }
    create(isCorrect) {
        this.div = document.createElement("Characters");
        var myString = String(isCorrect);
        this.div.id = myString;
        this.spawnElement.appendChild(this.div);
        this.div.innerText = this.value;
        this.x = 0;
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