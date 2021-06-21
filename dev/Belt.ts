// import { transform } from "../node_modules/typescript/lib/typescript"

export class Belt {
    private beltContainer : HTMLElement
    private beltElem : HTMLElement
    public beltSpeed : number

    constructor() {
        this.beltContainer = document.querySelector("beltContainer")!
        this.beltElem = document.querySelector("beltElem")!
        this.spawnBelt()
    }

    spawnBelt(){
        this.beltSpeed =  Math.floor(Math.random() * 9 ) + 1
    }
}