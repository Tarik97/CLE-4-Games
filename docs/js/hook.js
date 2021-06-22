export class Hook {
    constructor() {
        this.create();
    }
    create() {
        this.div = document.createElement("hook");
        this.img = document.createElement("img");
        this.img.classList.add("tile");
        this.img.setAttribute("src", "../images/belt1.png");
        this.div.appendChild(this.img);
        document.body.appendChild(this.div);
    }
    shootHook(mousex, mousey) {
        console.log([mousex, mousey]);
        this.div.style.transform = `translate(${mousex - 220}px, ${mousey - 60}px)`;
    }
}
//# sourceMappingURL=Hook.js.map