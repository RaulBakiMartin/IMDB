import { Professional } from "./professional";

export class Movie
{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;



    constructor(title: string, releaseYear: number, nationality: string, genre: string)
    {
        let noperson = new Professional("", 0, "", 0, 0, "", "", "", false, "", 0, "");
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

    public printMovie()
    {
        console.log("\nFilm data shit");
        console.log("\n · Title: "+this.title);
        console.log("\n · Release Year: "+this.releaseYear);
        console.log("\n · Nationality: "+this.nationality);
        console.log("\n · Actors: ");

        for(let i: number = 0; i< this.actors.length; i++)
        {
            console.log("\n           - ");
            this.actors[i].printAll()
        }
            
        console.log("\n\n · Director: ");
        this.writer.printAll();

        console.log("\n\n · Writer: ");
        this.writer.printAll();

        console.log("\n\n · Language: "+this.language);
        console.log("\n · Producer: "+this.producer);
        console.log("\n · Distributor: "+this.distributor);
        console.log("\n · Genre: "+this.genre);
        
        
    }
}