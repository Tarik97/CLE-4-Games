
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
      constructor() {
          //Level 1: using the word 'Bus'
          this.levels = []
          const level1: Level = new Level("B_s", "u", ["a", "u", "o", "i", "x"])
          //the dom element where characters are placed in
          this.spawnElement = document.querySelector('charcontainer')!;
          this.spawnCharacters(level1)
          this.gameloop()
      }
      gameloop() {
      }
      spawnCharacters(level1 : Level){
          let length : number = level1.possibilities.length
          for (let i : number = 0; i < length; i++) {
              this.selectRandomCharacter(level1)
          }
      }
      private selectRandomCharacter(level : Level) {
          let randomValue =  Math.floor(Math.random() * level.possibilities.length)
          if(level.possibilities.length > 0) {
          let c = level.possibilities.splice(randomValue, 1) 
          console.log(level.possibilities);
          this.characters.push(new Character(c[0]))
          }
      }
  }
  new Game()