import { CharacterSprite } from "../character.js";

export class UdawosSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "udawos";
  }
}

const idle = {
  frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
  hz: 15,
  looped: true,
};
