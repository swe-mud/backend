import Choices from './Choices';
import Interaction from './Interaction';
import Inventory from './Inventory';
import Item from './Item';
import Message from './Message';
import NonPlayerCharacter from './NonPlayerCharacter';
import Player from './Player';
import { sendToWsClient } from '@/server';

export default class Game {
  player: Player;
  inventory: Inventory;
  isGameOver: boolean;

  constructor() {}

  start(playerName: string, studentId: number) {
    this.reset();
    this.isGameOver = false;
    this.player = new Player(playerName, studentId);
    this.inventory = new Inventory();
  }

  reset(): void {
    this.isGameOver = false;
    this.player = null;
    this.inventory = null;
  }

  handleEvent(event: string): void {
    if (event == 'sceneWakeUp_where_am_I') {
      const sceneWakeUp_whereAmIMessage1: Message = new Message('Student neben dir', 'Alles Ok? Du siehst verwirrt aus?');
      sendToWsClient({ type: 'message', message: sceneWakeUp_whereAmIMessage1 });
      const sceneWakeUp_whereAmIMessage2: Message = new Message(
        'Prof',
        `„Haben Sie gerade gesagt Sie wissen nicht wo Sie sind?
                                                                 Ich glaube Sie brauchen Hilfe. Ruft einen Krankenwagen!“`,
      );
      const sceneWakeUp_whereAmIMessage3: Message = new Message(
        null,
        `Der Krankenwagen holt dich ab und bringt dich ins Krankenhaus,
                                                                um dich zu untersuchen. Die verpasste Zeit schaffst du niemals nachzuholen.`,
        true,
      );
      this.isGameOver = true;
    }

    if (event == 'sceneWakeUp_say_nothing') {
      const sceneWakeUp_sayNothingMessage1: Message = new Message(
        null,
        `Du schaust dich verwirrt um. Scheinbar bist du in einer Einführungsveranstaltung
                                                            für ein duales Studium der Informatik gelandet. Du hast zwar keine Ahnung warum du hier bist,
                                                            aber irgendwie kannst du auch nicht einfach gehen. Irgendetwas fesselt dich hier.
                                                            Der Prof beginnt Zettel mit Gruppennamen auszuteilen`,
        true,
      );
    }

    if (event == 'sceneTheGroup_hello_group_A') {
      const sceneTheGroup_helloGroupAMessage1: Message = new Message(null, 'alle schauen dich leicht verwirrt an');
    }

    if (event == 'sceneTheGroup_say_nothing') {
      const sceneTheGroup_sayNothingAMessage1: Message = new Message(
        'Studentin aus deiner Gruppe',
        `„Hey ${this.player.getName} du sollst deinen Laptop
                                                                        benutzen, ohne hast du wohl kaum eine Chance.“`,
      );
    }

    if (event == 'sceneEquipLaptop_equip_laptop') {
      const laptop: Item = new Item('Ein alter Lenovo Ideapad mit wenig Leistung', 0, 0, 2);
      this.inventory.addItem(laptop, 1);
      this.player.equipItem(this.player.equipmentLeftHand, 1);
      this.inventory.destroyItem(1);
    }

    if (event == 'sceneEquipLaptop_no_need') {
      const sceneEquipLaptop_noNeedMessage1: Message = new Message(this.player.name, 'Im Mittelalter haben Studierende sowas auch nicht gebraucht');
    }
  }

  sceneWakeUp(): void {
    // client
    const sceneDescription = `Du wachst plötzlich auf und stellst überrascht fest,
                                        dass du dich in einem Raum voller Student:innen und einem Professor
                                        befindest`;
    const sceneDescriptionMessage: Message = new Message(null, sceneDescription, true);
    const interactionA: Interaction = new Interaction('Wo zur Hölle bin ich', 'sceneWakeUp_where_am_I');
    const interactionB: Interaction = new Interaction('Nichts sagen', 'sceneWakeUp_say_nothing');
    const choicesSceneWakeUp: Choices = new Choices([interactionA, interactionB]);
  }

  sceneTheGroup(): void {
    //client
    const sceneDescription = `Prof gibt dir einen Zettel auf dem "Gruppe A steht und geht weiter. Vier Student:innen
                                        schauen dich an, lächeln und zeigen dir, dass Sie den gleichen Zettel bekommen haben.`;
    const sceneDescriptionMessage: Message = new Message(null, sceneDescription, true);
    const interactionA: Interaction = new Interaction('Also Gruppe A', 'sceneTheGroup_hello_group_A');
    const interactionB: Interaction = new Interaction('Nichts Sagen', 'sceneTheGroup_say_nothing');
    const choicesSceneTheGroup: Choices = new Choices([interactionA, interactionB]);
  }

  sceneEquipLaptop(): void {
    //client
    const sceneDescription = `Die Studentin zeigt auf deinen alten Laptop`;
    const sceneDescriptionMessage: Message = new Message(null, sceneDescription, true);
    const interactionA: Interaction = new Interaction('Klar gute Idee', 'sceneEquipLaptop_equip_laptop');
    const interactionB: Interaction = new Interaction('Sowas brauch ich nicht', 'sceneEquipLaptop_no_need');
    const choicesSceneEquipLaptop: Choices = new Choices([interactionA, interactionB]);
  }
}

export const game: Game = new Game();
