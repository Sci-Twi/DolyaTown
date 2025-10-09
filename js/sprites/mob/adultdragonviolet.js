import { CharacterSprite } from "../character.js";

export class AdultDragonVioletSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "adultdragonviolet";
  }
}

const idle = {
  frames: [0, 1, 0, 1, 0, 1, 0],
  hz: 10,
  looped: true,
};
