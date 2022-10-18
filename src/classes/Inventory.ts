import Item from "./Item";

export default class Inventory {
    items: Item[];
    slots: number;

    constructor() {
        this.slots = 5;
        this.items = [];
    }

    listInventory(): Item[] {
        return this.items;
    }

    addItem(item: Item): void {
        if (this.items.length <= 5) {
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

    }

}