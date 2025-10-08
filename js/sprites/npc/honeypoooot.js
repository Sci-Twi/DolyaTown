import { CharacterSprite } from "../character.js";

export class HoneypooootSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "honeypoooot";
  }
}

const idle = {
  frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  hz: 3,
  looped: true,
};
