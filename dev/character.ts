import { transform } from "../node_modules/typescript/lib/typescript"

export class Character {
    x : number = 0 
    y : number = 0
    Characters : HTMLElement
    speed : number = 0
    value : string = ''
    onBelt : boolean
    isCorrect : boolean = false
    charContainer : HTMLElement

    constructor(value : string, isCorrect : boolean, currenLevel : number){
        this.value = value
        this.charContainer = document.querySelector('charcontainer')!;
        this.create(isCorrect, currenLevel)
    }

    //not working
    update() : void {
        // if(logkey = "KeyW") {
        //     console.log("we movin");
        //     this.x -= this.speed;
        //     this.Characters.style.transform = `translate(${this.x}px, ${this.y}px)`
        //      test test test git
        // }
    }

    create(isCorrect : boolean, currentLevel : number) : void{
        this.Characters = document.createElement("characters" + currentLevel)
        this.Characters.classList.add("characters")
        var myString : string = String(isCorrect);
        this.Characters.id = myString
        this.charContainer.appendChild(this.Characters);
        this.Characters.innerText = this.value
        this.x = 0 
    }

    public removePreviousCharacters(previousLevel : number){
        let prevElement : HTMLElement = document.querySelector("characters" + previousLevel);
        this.charContainer.removeChild(prevElement);
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