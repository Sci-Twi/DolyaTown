import { CharacterSprite } from "../character.js";

export class UnclesSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "uncles";
  }
}

const idle = {
  frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
  hz: 3,
  looped: true,
};
