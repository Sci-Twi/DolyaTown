import { CharacterSprite } from "../character.js";

export class ApostleSprite {
  characterSprite;

  // character;
  constructor() {
    this.characterSprite = new CharacterSprite();

    this.characterSprite.idle = idle;
    this.characterSprite.current = idle;
    
    // this.characterSprite.textureName = ;
    // this.character = character;
  }

  getTextureName() {
    return "apostle";
  }
}

const idle = {
  frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
  hz: 3,
  looped: true,
};
