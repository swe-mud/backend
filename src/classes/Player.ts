import Action from "./Action";
import Inventory from "./Inventory";
import Item from "./Item";
import NonPlayerCharacter from "./NonPlayerCharacter";

export default class Player {
    name: string;
    studentId: number;
    health: number;
    skillLevel: number;
    defenseLevel: number;
    equipmentLeftHand: Item;
    equipmentRightHand: Item;
    equipmentHat: Item;
    playerInventory: Inventory;

    constructor(name: string, studentId: number) {
        this.name = name;
        this.studentId = studentId;
        this.health = 10;
        this.skillLevel = 2;
        this.defenseLevel = 10;
        this.equipmentLeftHand = new Item("empty", 0, 0, 0);
        this.equipmentRightHand = new Item("empty", 0, 0, 0);
        this.equipmentHat = new Item("empty", 0, 0, 0);

    }
    get getName() {
        return this.name;
    }
    takeAction(action: Action): string {
        return action.getAction;
    }

    equipItem(equipmentSlot: Item, inventorySlot: number): void {
        if (equipmentSlot.getDescription == "empty" ) {
            equipmentSlot = this.playerInventory.extractItem(inventorySlot);
        }
        else {
            this.playerInventory.addItem(equipmentSlot, inventorySlot);
            equipmentSlot = this.playerInventory.extractItem(inventorySlot);
        }
    }

    addItemToInventory(item: Item, inventorySlot: number): void {
        this.playerInventory.addItem(item, inventorySlot);
    }
    
    destoryItemInInventory(slot: number): void{
        this.playerInventory.destroyItem(slot);
    }

    attack(enemy: NonPlayerCharacter): void {
        let randomNumberOneToTwenty: number = Math.floor(Math.random() * 20) + 1;
        if (randomNumberOneToTwenty + this.skillLevel >= enemy.getDefenseLevel) {
            let diceWithSixEyes: number = Math.floor(Math.random() * 6) + 1;
            enemy.decreaseHealth(diceWithSixEyes);
            if (!enemy.isAlive) {
                this.skillLevel += 1;
            }
        }
    }
}