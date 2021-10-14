import {Professional} from "./professional";

import { Movie } from "./Movie";
import { Imdb } from './Imdb';


var fs = require('file-system');

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





fs.writeFileSync('ImdbBBDD.json', JSON.stringify(biblio));


let x: Buffer = fs.readFileSync('ImdbBBDD.json');


console.log(x.toString());


console.log(JSON.parse(x.toString()));


// console.log(JSON.parse(fs.readFileSync('ImbdBBDD.json')));

