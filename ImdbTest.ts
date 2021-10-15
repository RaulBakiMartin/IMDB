import {Professional} from "./professional";

import { Movie } from './Movie';
import { Imdb } from './Imdb';
import { parse } from "path/posix";


var fs = require('file-system');
var readLineSync = require('readline-sync');

let movie1=  new Movie("Origen", 2010, "USA", "suspense");

movie1.printMovie()

let persona = new Professional ("Mel Gibson",65,"Masculine",78,1.77,"Green",
                               "Caucasian","brown",false,"U.S.A.",2,"Actor")
persona.printAll()


let actor1 = new Professional("Amy Adams", 49, "F", 65, 177, "redhead", "blue", "Caucasian", false, "USA", 2, "actor");

let director = new Professional("Sam  MEndes", 64, "M", 87, 181, "Brown", "brown", "Caucasian", false, "English", 1, "director")

let writer = new Professional("George RR Martin", 76, "M", 123, 190, "Grey", "black", "Caucasian", false, "English", 0, "writer")

movie1.actors = [persona, actor1];

movie1.director = director;

movie1.writer = writer;

movie1.printMovie()




let movie3 = new Movie("1917", 2019, "USA", "war")

movie3.producer = "Amblin PArtners";
movie3.distributor = "Dreamworks";
movie3.isMCU = false;
movie3.language = "English";
movie3.mainCharacterName = "George McCay";

let movie4 = new Movie("The arrival", 2016, "USA", "sci-fi/drama")
movie4.producer = "Lava Bear Films";
movie4.distributor = "PAramount";
movie4.isMCU = false;
movie4.language = "English";



movie3.printMovie()

let biblio  = new Imdb([movie1, movie3, movie4])



// console.log(JSON.stringify(biblio));



// PROYECTO FIN MODULO 1; AVANZADO; fs.writeFileSync()/fs.readFileSync() y JSON.stringify()/JSON.parse()

// fs.writeFileSync('ImdbBBDD.json', JSON.stringify(biblio));


// let x: Buffer = fs.readFileSync('ImdbBBDD.json');


// console.log(x.toString());


// console.log(JSON.parse(x.toString()));


// console.log(JSON.parse(fs.readFileSync('ImbdBBDD.json')));


let movie5 = new Movie("Capitan America", 2011, "USA", "action");



movie5.language = "English";
movie5.isMCU = true;
movie5.mainCharacterName = "Steve Rogers";
movie5.distributor = "Disney";
movie5.producer = "Marvel Studios";

let movie6 = new Movie("Joker", 2019, "USA", "drama")

movie6.language = "English";
movie6.isMCU = false;
movie6.mainCharacterName = "Arthur Fleck";
movie6.distributor = "Warner Bros. Pictures";
movie6.producer = "DC Films";


let films = new Imdb([movie5, movie6]);


films.escribirEnFicheroJSON("ficheroPrueba");


let nofilm = new Movie("", 0, "", "")
let prueba;

prueba = films.obtenerInstanciaIMDB("ficheroPrueba");

console.log(prueba);

let titlea: string = readLineSync.question("Introduzca titulo de la pelicula: ");
let  releaseYeara: number = parseInt(readLineSync.question("Intrudozca anyo de estreno de la pelicula: "));
let nationalitya: string = readLineSync.question("Intrudozca nacionalidad de la pelicula: ");
let genrea: string = readLineSync.question("Introduzca genero de la pelicula: ");
let producera: string = readLineSync.question("Introduzca productora de la pelicula: ");
let distributora: string = readLineSync.question("Introduzca distribuidora de la pelicula: ");
let isMCUa: boolean = readLineSync.question("Introdozca si esta dentro del MCU de la pelicula(true/false): ");
let mainCharacterNamea: string = readLineSync.question("Introduzca nombre del personaje principal de la pelicula: ");
let laguagea: string = readLineSync.question("Introduzca lenguaje original de la pelicula: ");

let moviea = new Movie(titlea, releaseYeara, nationalitya, genrea);

moviea.distributor = distributora;
moviea.producer = producera;
moviea.isMCU = isMCUa;
moviea.mainCharacterName = mainCharacterNamea;
moviea.language = laguagea;

prueba.push(moviea)

console.log(prueba);
