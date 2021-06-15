
  import { Hook } from "./Hook.js"
  import { Tube } from "./Tube.js"
  import { Level } from "./Level.js"
  import { Character } from "./Character.js"

  class Game {
      spawnElement : HTMLElement
      div : HTMLElement
      private levels : Level[] = []
      private hook : Hook
      private tube : Tube

      private characters : Character[] = []

      private currentLevel : number = 0
      public level1 : Level = new Level("B_s", "u", ["a", "u", "o", "i", "x"])
      public level2 : Level = new Level("T_s", "a", ["r", "a", "i", "u", "v"])
      public level3 : Level = new Level("P_n", "e", ["h", "f", "e", "o", "a"])
      public level4 : Level = new Level("G_m", "u", ["p", "u", "o", "i", "q"])

      public constructor() {
          
        if (this.currentLevel == 0){
          this.spawnCharacters(this.level1)
        }

        this.spawnElement = document.querySelector('charcontainer')!

        document.getElementById("foreground")!.addEventListener("click", this.clickHandler)
      }

      public clickHandler(e : Event){
          let target : HTMLElement = e.target
          console.log(target.innerText)
      }

      private spawnCharacters(level1 : Level){
          length = level1.possibilities.length;
          for (let i : number = 0; i < length; i++) {
              this.selectRandomCharacter(level1)
          }
      }

      private selectRandomCharacter(level : Level) {

          let randomValue =  Math.floor(Math.random() * level.possibilities.length)

          if(level.possibilities.length > 0) {

          let c = level.possibilities.splice(randomValue, 1) 

          this.characters.push(new Character(c[0]))

          }
      }


      
  }
  new Game()