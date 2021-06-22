// import { transform } from "../node_modules/typescript/lib/typescript"

import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript"

export class Belt {

    private x: number
    private y: number
    public beltSpeed: number
    private beltLenght: number
    private belt: HTMLElement
    private img: HTMLElement

    constructor(offSet: number, even: boolean) {
        this.spawnBelt(offSet, even)
    }

    //     <beltElem>
    //     <img src="../images/belt2.png" class="tile belt"></img>
    //     <img src="../images/belt1.png" class="tile belt"></img>
    //     <img src="../images/belt1.png" class="tile belt"></img>
    //     <img src="../images/belt1.png" class="tile belt"></img>
    //     <img src="../images/belt2.png" class="tile belt"></img>
    //     </beltElem>

    spawnBelt(offSet: number, even: boolean) {
       
        this.beltLenght = 7

        this.beltSpeed = Math.floor(Math.random() * 9) + 1
        this.belt = document.createElement("belt")

        //adding images (individual sprites)
        for (let i = 0; i < this.beltLenght; i++) {
            this.img = document.createElement("img")
            this.img.classList.add("tile")
            if (i == 0) {
                this.img.classList.add("flipped")
                this.img.setAttribute("src", "../images/belt2.png")
            } else if (i == this.beltLenght - 1) {
                this.img.setAttribute("src", "../images/belt2.png")
            } else {
                this.img.setAttribute("src", "../images/belt1.png")
            }
            this.belt.appendChild(this.img)
        }

        if (even){
            this.y = offSet * 5 + 300
            this.x = offSet - 100
            this.belt.style.transform = `translate(${this.x}px, ${this.y}px)`
        } else {
            this.beltSpeed = this.beltSpeed * -1
            this.y = offSet * 5 + 200
            this.x = offSet + 100
            this.belt.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
      
        document.body.appendChild(this.belt)
    }

    getBoundingRect() : DOMRect {
        return this.img.getBoundingClientRect();
    }
}