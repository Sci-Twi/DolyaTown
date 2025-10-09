import { CharacterSprite } from "../character.js";

export class ShopKeeperSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "shopkeeper";
  }
}

const idle = {
  frames: [1, 1, 1, 1, 1, 0, 0, 0, 0],
  hz: 10,
  looped: true,
};
