import { CharacterSprite } from "../character.js";

export class Xavier251998Sprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "xavier251998";
  }
}

const idle = {
  frames: [0, 1],
  hz: 1,
  looped: true,
};
