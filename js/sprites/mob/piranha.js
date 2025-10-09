import { CharacterSprite } from "../character.js";

export class PiranhaSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "piranha";
  }
}

const idle = {
  frames: [0, 1, 2, 1],
  hz: 8,
  looped: true,
};
