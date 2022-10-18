import Item from "./Item";

export default class Inventory {
    items: Item[];
    maxInventorySlots: number;

    constructor() {
        this.maxInventorySlots = 5;
        this.items = [];
        for (let i: number = 0; i<this.maxInventorySlots; i++) {
            this.items[i] = new Item("empty", 0, 0, 0)
        }
    }

    listInventory(): Item[] {
        return this.items;
    }

    addItem(item: Item, slot: number): void {
        if (slot < this.maxInventorySlots && slot > 0) {
            if (this.items[slot].getDescription == "empty") {
                this.items[slot-1] = item;
            }
            else {
                throw new Error("There is already an item in that slot");
            }
        }
        else {
            throw new Error("Your bag has not that many slots, you cannot add an item here!")
        }
    } 

    extractItem(slot: number): Item {
        return this.items[slot];
    } 

    destroyItem(slot: number): void {
        if (this.items.length <= slot && slot > 0) {
            if (this.items[slot].getDescription != "empty") {
                this.items[slot] = new Item("empty", 0, 0, 0)
            }
            else {
                throw new Error("You have no item in that slot!")
            }
        }
        else {
            throw new Error("Your bag has not that many slots, there is no item you can destroy!")
        } 
    }
}