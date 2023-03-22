export default class JuegoDeCasino {

    private name: string;
    private players : number;
    private numberOfTable : number;
    private bet : number;
    constructor(name: string, players: number, numberOfTable: number, bet: number) {
        this.name = name;
        this.players = players;
        this.numberOfTable = numberOfTable;
        this.bet = bet;
    };

    public juegoDeCasinoInfo(): JuegoDeCasino{
        return this;
    };
};