import { transform } from "../node_modules/typescript/lib/typescript"

export class Character {
    x: number = 0
    y: number = 0
    xSpeed: number = 0
    ySpeed: number = 3
    character: HTMLElement
    charContainer: HTMLElement
    img: HTMLElement
    onBelt: boolean
    isCorrect: boolean = false
    value: string = ''


    constructor(value: string, isCorrect: boolean, currenLevel: number, offset: number) {
        this.value = value
        this.charContainer = document.querySelector('charcontainer')!;
        this.create(isCorrect, currenLevel, offset)

        this.img = document.createElement("img")
        this.img.classList.add("tile")
        this.img.classList.add("crate")
        this.img.setAttribute("src", "images/crate.png")
        this.character.appendChild(this.img)
        this.img.style.transform = `translate(-200px, px)`
    }

    update(): void {

        if (this.onBelt) {
            this.xSpeed = 3
            this.ySpeed = 0
        } else {
            this.xSpeed = 0
            this.ySpeed = 3
        }

        if (this.x > window.innerWidth) {
            this.x = -this.character.clientWidth
        }
        if (this.y > window.innerHeight) {
            this.y = -this.character.clientHeight
        }

        this.x = this.x + this.xSpeed
        this.y = this.y + this.ySpeed
        this.character.style.transform = `translate(${this.x}px, ${this.y}px)`

    }

    create(isCorrect: boolean, currentLevel: number, offset: number): void {
        this.character = document.createElement("characters" + currentLevel)

        document.body.appendChild(this.character)

        this.x = offset * 150

        this.character.classList.add("characters")
        var myString: string = String(isCorrect);
        this.character.id = myString
        this.character.innerText = this.value
    }

    public removePreviousCharacters(previousLevel: number) {
        let prevElement: HTMLElement = document.querySelector("characters" + previousLevel)!;
        this.character.remove()
    }

    getBoundingRect(): DOMRect {
        return this.character.getBoundingClientRect();
    }
}