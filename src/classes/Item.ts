export default class Item {
    description: string;
    healthBoost: number;
    defenseBoost: number;
    skillLevelBoost: number;
    
    constructor(description: string, healthBoost: number, defenseBoost: number, skillLevelBoost: number) {
        this.description = description;
        this.healthBoost = healthBoost;
        this.defenseBoost = defenseBoost;
        this.skillLevelBoost = skillLevelBoost;
    }

    get getDescription() {
        return this.description;
    }
}