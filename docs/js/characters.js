export class Characters {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        console.log("Characters are created");
        this.create();
    }
    create() {
        this.div = document.createElement("Characters");
        document.body.appendChild(this.div);
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
//# sourceMappingURL=Characters.js.map