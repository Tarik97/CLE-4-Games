export class Belt {
    constructor(offSet, even) {
        this.spawnBelt(offSet, even);
    }
    spawnBelt(offSet, even) {
        this.beltLenght = 10;
        this.beltSpeed = Math.floor(Math.random() * 9) + 1;
        this.belt = document.createElement("belt");
        for (let i = 0; i < this.beltLenght; i++) {
            this.img = document.createElement("img");
            this.img.classList.add("tile");
            if (i == 0) {
                this.img.classList.add("flipped");
                this.img.setAttribute("src", "images/belt2.png");
            }
            else if (i == this.beltLenght - 1) {
                this.img.setAttribute("src", "images/belt2.png");
            }
            else {
                this.img.setAttribute("src", "images/belt1.png");
            }
            this.belt.appendChild(this.img);
        }
        if (even) {
            this.y = offSet * 3.5 + 150;
            this.x = window.innerWidth / 10;
            this.belt.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        else {
            this.beltSpeed = this.beltSpeed * -1;
            this.y = offSet * 3.5 + 150;
            this.x = window.innerWidth / 10 + 200;
            this.belt.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        document.body.appendChild(this.belt);
    }
    getBoundingRect() {
        return this.img.getBoundingClientRect();
    }
}
//# sourceMappingURL=Belt.js.map