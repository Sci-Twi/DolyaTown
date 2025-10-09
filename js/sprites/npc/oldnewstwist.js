import { CharacterSprite } from "../character.js";

export class OldNewsTwistSprite {
  characterSprite;

  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;

  }

  getTextureName() {
    return "oldnewstwist";
  }
}

const idle = {
  frames: [0, 0, 0, 1],
  hz: 2,
  looped: true,
};
