export class Belt {
    constructor() {
        this.beltContainer = document.querySelector("beltContainer");
        this.beltElem = document.createElement("beltElem");
        this.spawnBelt();
    }
    spawnBelt() {
        this.beltSpeed = Math.floor(Math.random() * 9) + 1;
    }
}
//# sourceMappingURL=Belt.js.map