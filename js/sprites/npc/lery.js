import { CharacterSprite } from "../character.js";

export class LerySprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "lery";
  }
}

const idle = {
  frames: [0, 1, 2],
  hz: 10,
  looped: true,
};
