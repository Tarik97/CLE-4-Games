export class Hook {
    constructor() {
        this.create();
    }
    create() {
        this.outerDiv = document.createElement("outerDiv");
        this.div = document.createElement("hook");
        this.outerDiv.appendChild(this.div);
        document.body.appendChild(this.outerDiv);
    }
    shootHook() {
    }
}
//# sourceMappingURL=Hook.js.map