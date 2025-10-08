import { CharacterSprite } from "../character.js";

export class Kostis12345Sprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "kostis12345";
  }
}

const idle = {
  frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
  hz: 3,
  looped: true,
};
