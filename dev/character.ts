import { transform } from "../node_modules/typescript/lib/typescript"
export class Character {
    x : number = 0 
    y : number = 0
    div : HTMLElement
    speed : number = 0
    value : string = ''
    onBelt : boolean
    isCorrect : boolean = false
    spawnElement : HTMLElement

    constructor(value : string, isCorrect : boolean){
        this.value = value
        this.spawnElement = document.querySelector('charcontainer')!;
        this.create(isCorrect)
    }
    //not working
    update() : void {
        // if(logkey = "KeyW") {
        //     console.log("we movin");
        //     this.x -= this.speed;
        //     this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        //      test test test git
        // }
    }
    create(isCorrect : boolean) : void{
        this.div = document.createElement("Characters")
        var myString : string = String(isCorrect);
        this.div.id = myString
        this.spawnElement.appendChild(this.div);
        this.div.innerText = this.value
        this.x = 0 
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