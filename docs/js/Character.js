export class Character {
    constructor(value) {
        this.x = 0;
        this.y = 0;
        this.speed = 0.0001;
        this.value = '';
        this.value = value;
        this.spawnElement = document.querySelector('charcontainer');
        this.create();
    }
    update() {
    }
    create() {
        this.div = document.createElement("Characters");
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