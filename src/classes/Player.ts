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
    inventory: Inventory;

    constructor(name: string, studentId: number) {
        this.name = name;
        this.studentId = studentId;
        this.equipmentLeftHand = new Item("empty", 0, 0, 0);
        this.equipmentRightHand = new Item("empty", 0, 0, 0);
        this.equipmentHat = new Item("empty", 0, 0, 0);
        this.health = 10;
        this.skillLevel = 2 + this.equipmentHat.skillLevelBoost, this.equipmentLeftHand.skillLevelBoost + this.equipmentRightHand.skillLevelBoost;
        this.defenseLevel = 10;
        this.inventory = new Inventory();

    }
    get getName() {
        return this.name;
    }

    equipItem(equipmentSlot: Item, inventorySlot: number): void {
        if (equipmentSlot.getDescription == "empty" ) {
            equipmentSlot = this.inventory.extractItem(inventorySlot);
        }
        else {
            this.inventory.addItem(equipmentSlot, inventorySlot);
            equipmentSlot = this.inventory.extractItem(inventorySlot);
        }
    }

    addItemToInventory(item: Item, inventorySlot: number): void {
        this.inventory.addItem(item, inventorySlot);
    }
    
    destoryItemInInventory(slot: number): void{
        this.inventory.destroyItem(slot);
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