import Action from "./Action";
import Inventory from "./Inventory";
import Item from "./Item";
import NonPlayerCharacter from "./NonPlayerCharacter";
import Player from "./Player";
import Scene from "./Scene";

class Game {
    startText: String;
    scenes: Scene[];
    player: Player;
    npcs: NonPlayerCharacter[];
    actions: Action[];
    inventory: Inventory;
    items: Item[];
    isGameOver: boolean;

    constructor(playerName: string, studentId: number) {
        this.isGameOver = false;
        this.player = new Player(playerName, studentId);
    }

    run(): void {
        
    }

    sentMessage(): void {

    }

    woZurHoelleBinIch(): void {


    }
}


