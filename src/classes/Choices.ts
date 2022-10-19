import Interaction from "./Interaction";

export default class Choices {
    interactions: Interaction[];
    constructor(interactions: Interaction[]) {
        this.interactions = interactions;
    }
}