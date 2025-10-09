import { CharacterSprite } from "../character.js";

export class SadsaltanSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "sadsaltan";
  }
}

const idle = {
  frames: [0, 0, 0, 1, 0, 0, 1, 1],
  hz: 1,
  looped: true,
};
