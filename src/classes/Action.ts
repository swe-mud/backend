export default class Action {
    action: string;
    consequence: string;
    internalCommands: string[];
    constructor(action: string, consequence: string) {
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