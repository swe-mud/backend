export default class NonPlayerCharacter {
    description: String;
    health: number;
    defenseLevel: number;
    isDead: boolean

    constructor(description: string, health: number, defenseLevel: number) {
        this.isDead = false;
        this.description = description;
        this.health = health;
        this.defenseLevel = defenseLevel;
    }

    changeHealth(damage: number): void {

    }

}