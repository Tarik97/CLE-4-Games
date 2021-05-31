"use strict";
class tube {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        console.log("Characters are created");
        this.create();
    }
    create() {
        this.div = document.createElement("Tube");
        document.body.appendChild(this.div);
        this.x = 0;
    }
    generateChar() {
    }
}
//# sourceMappingURL=tube.js.map