import { CharacterSprite } from "../character.js";

export class WatabouSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "watabou";
  }
}

const idle = {
  frames: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
  hz: 15,
  looped: true,
};
