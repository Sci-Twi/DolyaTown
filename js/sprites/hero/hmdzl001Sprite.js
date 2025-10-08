import { CharacterSprite } from "../character.js";

export class Hmdzl001Sprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();
    
    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;
  }

  getTextureName() {
    return "hmdzl001";
  }
}

const idle = {
  frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 1, 1, 6, 6, 7, 7, 7, 1, 1, 0, 0, 0],
  hz: 10,
  looped: true,
};