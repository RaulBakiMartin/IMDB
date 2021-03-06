"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var professional_1 = require("./professional");
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        var noperson = new professional_1.Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
        this.director = noperson;
        this.writer = noperson;
        this.language;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
    }
    Movie.prototype.printMovie = function () {
        console.log("\nFilm data shit");
        console.log("\n · Title: " + this.title);
        console.log("\n · Release Year: " + this.releaseYear);
        console.log("\n · Nationality: " + this.nationality);
        console.log("\n · Actors: ");
        for (var i = 0; i < this.actors.length; i++) {
            console.log("\n           - ");
            this.actors[i].printAll();
        }
        console.log("\n\n · Director: ");
        this.writer.printAll();
        console.log("\n\n · Writer: ");
        this.writer.printAll();
        console.log("\n\n · Language: " + this.language);
        console.log("\n · Producer: " + this.producer);
        console.log("\n · Distributor: " + this.distributor);
        console.log("\n · Genre: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
