import { transform } from "../node_modules/typescript/lib/typescript"

export class Character {
    x : number = 0 
    y : number = 0
    character : HTMLElement
    charContainer : HTMLElement
    speed : number = 3
    value : string = ''
    onBelt : boolean
    isCorrect : boolean = false


    constructor(value : string, isCorrect : boolean, currenLevel : number, offset : number){
        this.value = value
        this.charContainer = document.querySelector('charcontainer')!;
        this.create(isCorrect, currenLevel, offset)
    }
    
    update() : void {
        this.x += this.speed
      
        if (this.x > window.innerWidth){
            this.x = -this.character.clientWidth
        }
        this.character.style.transform = `translate(${this.x}px, 200px)`
        
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
            

    checkOnBelt(a: ClientRect, b: ClientRect) : boolean {
        return(a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
            this.onBelt = true 
    }
    setSpeed() : void{
        if(this.onBelt =true){
            this.speed = 2 
        }
    }
}