import Casino from "./Casino";
import JuegoDeCasino from "./JuegoDeCasino";
import Poker from "./PokerHoldEm";
import Ruleta from "./Ruleta";

const casiNo = new Casino('Casi no', 10000, 20);
const pokerHold = new Poker('Hold em', 'Poker', 6, 1, 50);
const ruleta = new Ruleta('Green', 20, 'Ruleta', 20, 2, 20);

casiNo.gameCasino(pokerHold);
casiNo.gameCasino(ruleta);
casiNo.casinoInfo();