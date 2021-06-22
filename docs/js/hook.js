export class Hook {
    constructor() {
        this.create();
    }
    update() {
    }
    create() {
        this.div = document.createElement("hook");
        this.img = document.createElement("img");
        this.img.classList.add("tile");
        this.img.setAttribute("src", "../images/hook.png");
        this.div.appendChild(this.img);
        document.body.appendChild(this.div);
        this.x = (window.innerWidth / 2) - (this.div.clientWidth / 2);
        this.y = window.innerHeight - this.div.clientHeight;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    shootHook(mousex, mousey) {
        this.div.style.transform = `translate(${mousex - this.div.clientWidth / 2}px, ${mousey - this.div.clientHeight / 2}px)`;
    }
}
//# sourceMappingURL=Hook.js.map