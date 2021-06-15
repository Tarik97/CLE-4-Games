"use strict";
exports.__esModule = true;
var Level_js_1 = require("./Level.js");
var Character_js_1 = require("./Character.js");
var Game = /** @class */ (function () {
    function Game() {
        this.levels = [];
        this.characters = [];
        //Level 1: using the word 'Bus'
        this.levels = [];
        var level1 = new Level_js_1.Level("B_s", "u", ["a", "u", "o", "i", "x"]);
        //the dom element where characters are placed in
        this.spawnElement = document.querySelector('charcontainer');
        this.spawnCharacters(level1);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
    };
    Game.prototype.spawnCharacters = function (level1) {
        var length = level1.possibilities.length;
        for (var i = 0; i < length; i++) {
            this.selectRandomCharacter(level1);
        }
    };
    Game.prototype.selectRandomCharacter = function (level) {
        var randomValue = Math.floor(Math.random() * level.possibilities.length);
        if (level.possibilities.length > 0) {
            var c = level.possibilities.splice(randomValue, 1);
            console.log(level.possibilities);
            this.characters.push(new Character_js_1.Character(c[0]));
        }
    };
    return Game;
}());
new Game();
