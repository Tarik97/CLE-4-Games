"use strict";
exports.__esModule = true;
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(value) {
        this.x = 0;
        this.y = 0;
        this.speed = 0.0001;
        this.value = '';
        this.value = value;
        this.spawnElement = document.querySelector('charcontainer');
        this.create();
    }
    //not working
    Character.prototype.update = function () {
        // if(logkey = "KeyW") {
        //     console.log("we movin");
        //     this.x -= this.speed;
        //     this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        // }
    };
    Character.prototype.create = function () {
        this.div = document.createElement("Characters");
        this.spawnElement.appendChild(this.div);
        this.div.innerText = this.value;
        this.x = 0;
    };
    Character.prototype.checkOnBelt = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
        this.onBelt = true;
    };
    Character.prototype.setSpeed = function () {
        if (this.onBelt = true) {
            this.speed = 2;
        }
    };
    return Character;
}());
exports.Character = Character;
