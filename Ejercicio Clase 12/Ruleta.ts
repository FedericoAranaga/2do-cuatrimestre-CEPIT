import JuegoDeCasino from "./JuegoDeCasino"

export default class Ruleta extends JuegoDeCasino{
    
    private color : string;
    private number : number;
    constructor (color: string, number: number, name: string, players: number, numberOfTable: number, bet: number){
        super (name, players, numberOfTable, bet);
        this.color = color;
        this.number = number;
    };

    public ruletaInfo(): Ruleta{
        console.log(this)
        return this
    };
};