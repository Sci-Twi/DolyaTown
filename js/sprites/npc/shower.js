import { CharacterSprite } from "../character.js";

export class ShowerSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "shower";
  }
}

const idle = {
  frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  hz: 3,
  looped: true,
};
