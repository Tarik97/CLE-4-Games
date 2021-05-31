export class Tube{

    x : number = 0 
    y : number = 0
    div : HTMLElement
    speed : number = 0
    nextChar: string
    currentChar: string
    
    constructor(){
        console.log("Tube is created")

        this.create()
    }

    create() : void{
        this.div = document.createElement("Tube")
        document.body.appendChild(this.div)

        this.x = 0 

    }

    generateChar(){

    }
}