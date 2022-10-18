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

    decreaseHealth(damage: number): void {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
        }
    }
}