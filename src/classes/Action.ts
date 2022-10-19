import Message from "./Message";

export default class Action {
    action: string;
    consequence: Message[];
    internalCommands: string[];
    constructor(action: string, consequence: Message[]) {
        this.action = action;
        this.consequence = consequence;
    }
    
    get getAction() {
        return this.action;  
    } 

    get getConsequence() {
        return this.consequence;
    }
}