import Inventory from "./Inventory";
import Item from "./Item";
import NonPlayerCharacter from "./NonPlayerCharacter";

export default class Player {
    name: String;
    health: number;
    skillLevel: number;
    defenseLevel: number;
    equipmentLeftHand: Item;
    equipmentRightHand: Item;
    equipmentHat: Item;
    playerInventory: Inventory;
    constructor(name: string) {
        this.name = name;
        this.health = 10;
        this.skillLevel = 2;
        this.defenseLevel = 10;
    }

    equipItem(): void{

    }

    attack(enemy: NonPlayerCharacter): void{

    }


}