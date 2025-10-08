import { CharacterSprite } from "../character.js";

export class RustyBladeSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "rustyblade";
  }
}

const idle = {
  frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
  hz: 315,
  looped: true,
};
