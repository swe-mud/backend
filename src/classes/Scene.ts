import Action from "./Action";
import NonPlayerCharacter from "./NonPlayerCharacter";

export default class Scene {
    description: String;
    professor: NonPlayerCharacter;
    actions: Action[];
    
    constructor(description: string, professor: NonPlayerCharacter, actions: Action[]) {
        this.description = description;
        this.professor = professor;
        this.actions = actions;
    }
}