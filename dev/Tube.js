"use strict";
exports.__esModule = true;
exports.Tube = void 0;
var Tube = /** @class */ (function () {
    function Tube() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        console.log("Tube is created");
        this.create();
    }
    Tube.prototype.create = function () {
        this.div = document.createElement("Tube");
        document.body.appendChild(this.div);
        this.x = 0;
    };
    Tube.prototype.generateChar = function () {
    };
    return Tube;
}());
exports.Tube = Tube;
