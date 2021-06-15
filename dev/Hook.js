"use strict";
exports.__esModule = true;
exports.Hook = void 0;
var Hook = /** @class */ (function () {
    function Hook() {
        this.create();
    }
    Hook.prototype.create = function () {
        this.outerDiv = document.createElement("outerDiv");
        this.div = document.createElement("hook");
        this.outerDiv.appendChild(this.div);
        document.body.appendChild(this.outerDiv);
    };
    Hook.prototype.shootHook = function () {
        // if(this.letter = correctChar) {
        // }
    };
    return Hook;
}());
exports.Hook = Hook;
