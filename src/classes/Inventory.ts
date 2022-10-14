import Item from "./Item";

export default class Inventory {
    items: Item[];
    slots: number;

    constructor() {
        this.slots = 5;
    }

    addItem(item: Item): void{

    } 

    extractItem(slot: number): Item{
        return this.items[slot];
    } 
}