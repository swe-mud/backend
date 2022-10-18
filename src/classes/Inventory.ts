import Item from "./Item";

export default class Inventory {
    items: Item[];
    maxInventorySlots: number;

    constructor() {
        this.maxInventorySlots = 5;
        this.items = [];
    }

    listInventory(): Item[] {
        return this.items;
    }

    addItem(item: Item): void {
        if (this.items.length < this.maxInventorySlots) {
            this.items.push(item)
        }
        else {
            throw new Error("Inventory is full!")
        }
    } 

    extractItem(slot: number): Item {
        return this.items[slot];
    } 

    destroyItem(slot: number): void {
        if (this.items.length <= slot && slot > 0) {
            this.items.splice(slot-1, 1)
        }
        else {
            throw new Error("Your bag has not that many spaces, there is no item you can destroy")
        }
        
    }

}