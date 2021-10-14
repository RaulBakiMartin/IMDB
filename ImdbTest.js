"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var Movie_1 = require("./Movie");
var Imdb_1 = require("./Imdb");
var movie1 = new Movie_1.Movie("Origen", 2010, "USA", "suspense");
movie1.printMovie();
var persona = new professional_1.Professional("Mel Gibson", 65, "Masculine", 78, 1.77, "Green", "Caucasian", "brown", false, "U.S.A.", 2, "Actor");
persona.printAll();
var actor1 = new professional_1.Professional("Amy Adams", 49, "F", 65, 177, "redhead", "blue", "Caucasian", false, "USA", 2, "actor");
var director = new professional_1.Professional("Sam  MEndes", 64, "M", 87, 181, "Brown", "brown", "Caucasian", false, "English", 1, "director");
var writer = new professional_1.Professional("George RR Martin", 76, "M", 123, 190, "Grey", "black", "Caucasian", false, "English", 0, "writer");
movie1.actors = [persona, actor1];
movie1.director = director;
movie1.writer = writer;
movie1.printMovie();
var movie3 = new Movie_1.Movie("1917", 2019, "USA", "war");
movie3.producer = "Amblin PArtners";
movie3.distributor = "Dreamworks";
movie3.isMCU = false;
movie3.language = "English";
movie3.mainCharacterName = "George McCay";
var movie4 = new Movie_1.Movie("The arrival", 2016, "USA", "sci-fi/drama");
movie4.producer = "Lava Bear Films";
movie4.distributor = "PAramount";
movie4.isMCU = false;
movie4.language = "English";
movie3.printMovie();
var biblio = new Imdb_1.Imdb([movie1, movie3, movie4]);
