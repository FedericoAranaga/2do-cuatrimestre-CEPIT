import JuegoDeCasino from "./JuegoDeCasino"

export default class Poker extends JuegoDeCasino {
    
    private typeOfMode : string;
    constructor(typeOfMode: string, name: string, players: number, numberOfTable: number, bet: number){
        super (name, players, numberOfTable, bet);
        this.typeOfMode = typeOfMode;
    };

    public pokerInfo(): Poker{
        console.log(this)
        return this;
    };
};



