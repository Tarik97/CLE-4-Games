import { transform } from "../node_modules/typescript/lib/typescript"
export class Character {
    x : number = 0 
    y : number = 0
    div : HTMLElement
    speed : number = 0.0001
    value : string = ''
    onBelt : boolean
    spawnElement : HTMLElement
    constructor(value : string){
        this.value = value
        this.spawnElement = document.querySelector('charcontainer')!;
        this.create()
    }
    //not working
    update() : void {
        // if(logkey = "KeyW") {
        //     console.log("we movin");
        //     this.x -= this.speed;
        //     this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        // }
    }
    create() : void{
        this.div = document.createElement("Characters")
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