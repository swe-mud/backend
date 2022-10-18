import Inventory from "./Inventory";
import Item from "./Item";
import NonPlayerCharacter from "./NonPlayerCharacter";

export default class Player {
    name: String;
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
    }

    equipItem(equipmentSlot: Item, inventorySlot: number): void {
        equipmentSlot = this.playerInventory.extractItem(inventorySlot);
    }

    addItemToInventory(item: Item): void {
        this.playerInventory.addItem(item);
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