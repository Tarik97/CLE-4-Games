export class Hook {

    // letter : Letter
    div: HTMLElement;
    img: HTMLElement;

    constructor() {
        this.create();
    }

    create() {
        this.div = document.createElement("hook");
        this.img = document.createElement("img")
        this.img.classList.add("tile")
        this.img.setAttribute("src", "../images/belt1.png")
        this.div.appendChild(this.img)
        document.body.appendChild(this.div);
    }

    shootHook(mousex: number, mousey: number) {
        console.log([mousex, mousey]); // Prints data
        this.div.style.transform = `translate(${mousex - this.div.clientWidth/2}px, ${mousey - this.div.clientHeight/2}px)`
    }
}