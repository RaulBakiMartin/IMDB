import { Movie } from "./Movie";
import {Professional} from "./professional";

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