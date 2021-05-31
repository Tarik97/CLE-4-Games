export class characters {
    x : number = 0 
    y : number = 0
    div : HTMLElement
    speed : number = 0
    
    //char on belt?
    onBelt : boolean

    constructor(){
        console.log("Characters are created")

        this.create()
    }

    create() : void{
        this.div = document.createElement("Characters")
        document.body.appendChild(this.div)

        this.x = 0 //waar tube is located on the window innerwidth en height 

    }

    checkOnBelt(a: ClientRect, b: ClientRect) : boolean{
        return(a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)

           
            this.onBelt = true

        //om dit te laten werken moet belt een getClientRect functie hebben 
    }

    setSpeed() : void{
        if(this.onBelt =true){
            this.speed = 2 
        }
    }
}