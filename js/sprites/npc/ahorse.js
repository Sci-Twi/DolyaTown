import { CharacterSprite } from "../character.js";

export class AHorseSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "ahorse";
  }
}

const idle = {
  frames: [0, 1, 2, 3],
  hz: 10,
  looped: true,
};
