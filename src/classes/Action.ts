class Action {
    _action: string;
    _prequisite: boolean;
    _consequence: string;
    constructor(action: string, consequence: string, prequisite: boolean) {
        this._action = action;
        this._prequisite = prequisite;
        this._consequence = consequence;

    }
    get action() {
        return this._action;  
    } 
    get
    get consequence() {
        return this._consequence;
    }
}