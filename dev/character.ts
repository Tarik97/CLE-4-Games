import { transform } from "../node_modules/typescript/lib/typescript"

export class Character {
    x : number = 0 
    y : number = 0
    character : HTMLElement
    charContainer : HTMLElement
    xSpeed : number = 0
    ySpeed : number = 3
    value : string = ''
    onBelt : boolean
    isCorrect : boolean = false


    constructor(value : string, isCorrect : boolean, currenLevel : number, offset : number){
        this.value = value
        this.charContainer = document.querySelector('charcontainer')!;
        this.create(isCorrect, currenLevel, offset)
    }

    update() : void {
        this.x += this.xSpeed
        this.y += this.ySpeed
        if (this.onBelt == false){
            this.xSpeed = 0
            this.ySpeed = 3
        } else {
            this.xSpeed = 3
            this.ySpeed = 0
        }
        
        if (this.x > window.innerWidth){
            this.x = -this.character.clientWidth
        }
        if (this.y > window.innerHeight){
            this.y = -this.character.clientHeight
        }
        this.character.style.transform = `translate(${this.x}px, ${this.y}px)`
        
    }

    create(isCorrect : boolean, currentLevel : number, offset : number) : void{
        this.character = document.createElement("characters" + currentLevel)
        document.body.appendChild(this.character)

        this.x = offset * 150

        this.character.classList.add("characters")
        var myString : string = String(isCorrect);
        this.character.id = myString
        this.character.innerText = this.value
    }

    public removePreviousCharacters(previousLevel : number){
        let prevElement : HTMLElement = document.querySelector("characters" + previousLevel)!;
        this.character.remove()
    }

    getBoundingRect() : DOMRect {
        return this.character.getBoundingClientRect();
    }
}