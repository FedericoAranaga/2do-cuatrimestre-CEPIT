import JuegoDeCasino from "./JuegoDeCasino"

export default class Casino {

    private name : string;
    private maxCapacity : number;
    private minBet : number;
    private gameOfCasino : JuegoDeCasino[];
    public constructor(name: string, maxCapacity: number, minBet: number) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.minBet = minBet;
        this.gameOfCasino = [];
    };

    public casinoInfo(): Casino{  
        console.log(this);
        return this;
    };

    public gameCasino (game: JuegoDeCasino){
        this.gameOfCasino.push(game);
    };
};