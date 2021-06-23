export class Hook {
    constructor() {
        this.speed = 2;
        this.clickHandler = (e) => {
            this.shootHook(e.clientX, e.clientY);
        };
        document.body.addEventListener("click", this.clickHandler);
        this.create();
    }
    shootHook(mousex, mousey) {
        this.targetX = mousex - this.div.clientWidth / 2;
        this.targetY = mousey - this.div.clientHeight / 2;
    }
    update() {
        if (this.x < this.targetX) {
            this.x = this.x + this.speed;
        }
        if (this.y < this.targetY) {
            this.y = this.y + this.speed;
        }
        if (this.x > this.targetX) {
            this.x = this.x - this.speed;
        }
        if (this.y > this.targetY) {
            this.y = this.y - this.speed;
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    create() {
        this.div = document.createElement("hook");
        this.img = document.createElement("img");
        this.img.classList.add("tile");
        this.img.setAttribute("src", "images/hook.png");
        this.div.appendChild(this.img);
        document.body.appendChild(this.div);
        this.x = (window.innerWidth / 2) - (this.div.clientWidth / 2);
        this.y = window.innerHeight - this.div.clientHeight;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=Hook.js.map