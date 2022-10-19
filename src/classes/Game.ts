import Action from "./Action";
import Inventory from "./Inventory";
import Item from "./Item";
import Message from "./Message";
import NonPlayerCharacter from "./NonPlayerCharacter";
import Player from "./Player";
import Scene from "./Scene";

class Game {
    startText: string;
    scenes: Scene[];
    player: Player;
    npcs: NonPlayerCharacter[];
    actions: Action[];
    inventory: Inventory;
    items: Item[];
    isGameOver: boolean;

    constructor(playerName: string, studentId: number, ) {
        this.isGameOver = false;
        this.player = new Player(playerName, studentId);
    }

    run(): void {
        
    }

    sentMessage(): void {
        
    }

    sceneOne(): void {
        let sceneOneDescription: string = `Du wachst plötzlich auf und stellst überrascht fest, 
                                             dass du dich in einem Raum voller Student:innen und einem Professor
                                             befindest`;
        // "Du wachst plötzlich auf..."
        let descriptionSceneOne: Message = new Message(null , sceneOneDescription, true);
        
        // Compose first choice and consequences
        let sceneOneChoiceA: string = "Wo zur Hölle bin ich?";
        let sceneOneDialogeA1: Message = new Message("Student neben dir", "Alles Ok? Du siehst verwirrt aus?");
        let sceneOneDialogeA2: Message = new Message("Prof", `„Haben Sie gerade gesagt Sie wissen nicht wo Sie sind? 
                                                             Ich glaube Sie brauchen Hilfe. Ruft einen Krankenwagen!“`);
        let sceneOneDialogeA3: Message = new Message(null, `Der Krankenwagen holt dich ab und bringt dich ins Krankenhaus, 
                                                            um dich zu untersuchen. Die verpasste Zeit schaffst du niemals nachzuholen.`, true);
        let sceneOneDialogeAComplete: Message[] = [sceneOneDialogeA1, sceneOneDialogeA2, sceneOneDialogeA3];        
        let sceneOneActionA: Action = new Action(sceneOneChoiceA, sceneOneDialogeAComplete);
        // "Wo zur Hölle bin ich?"
        let choiceASceneOne: Message = new Message(this.player.getName, sceneOneActionA.getAction, false, true);

        // Compose second choice and consequences
        let sceneOneChoiceB: string = "Nichts sagen";
        let sceneOneDialogeB1: Message = new Message(null, `Du schaust dich verwirrt um. Scheinbar bist du in einer Einführungsveranstaltung
                                                            für ein duales Studium der Informatik gelandet. Du hast zwar keine Ahnung warum du hier bist,
                                                            aber irgendwie kannst du auch nicht einfach gehen. Irgendetwas fesselt dich hier.
                                                            Der Prof beginnt Zettel mit Gruppennamen auszuteilen`, true);
        let sceneOneDialogeBComplete: Message[] = [sceneOneDialogeB1];
        let sceneOneActionB: Action = new Action(sceneOneChoiceB, sceneOneDialogeBComplete);
        // "Nichts sagen"
        let choiceBSceneOne: Message = new Message(null, sceneOneActionB.getAction, false, true);
        
        // resolve sceneOne
        // this.player.takeAction = "Wo zur Hölle bin ich" 
        descriptionSceneOne;
        choiceASceneOne;
        choiceBSceneOne;
        if (this.player.takeAction(sceneOneActionA) == sceneOneActionA.getAction) {
            sceneOneActionA.getConsequence[0];
            sceneOneActionA.getConsequence[1];
            sceneOneActionA.getConsequence[2];
            this.isGameOver = true;
        }
        // this.player.takeAction ="Nichts sagen"
        else if (this.player.takeAction(sceneOneActionB) == sceneOneActionB.getAction) {
            sceneOneDialogeBComplete[0];
        }
    }
}


