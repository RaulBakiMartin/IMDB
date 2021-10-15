"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('file-system');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero + '.json', JSON.stringify(this.peliculas));
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var x = fs.readFileSync(nombreFichero + '.json');
        return JSON.parse(x.toString());
    };
    return Imdb;
}());
exports.Imdb = Imdb;
// let movie1 = new Movie("1917", 2019, "USA", "war")
// movie1.producer = "Amblin PArtners";
// movie1.distributor = "Dreamworks";
// movie1.isMCU = false;
// movie1.language = "English";
// movie1.mainCharacterName = "George McCay";
// let movie2 = new Movie("The arrival", 2016, "USA", "sci-fi/drama")
// movie2.producer = "Lava Bear Films";
// movie2.distributor = "PAramount";
// movie2.isMCU = false;
// movie2.language = "English";
// movie1.printMovie()
