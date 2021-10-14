import { Movie } from './Movie';
import {Professional} from "./professional";


export class Imdb
{
    public peliculas: Movie[];

    constructor(peliculas: Movie[]) 
    {
        this.peliculas = peliculas;
    }

}



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