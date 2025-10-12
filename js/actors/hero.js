import { dungeon } from "../dungeon.js";
import { gameScene } from "../scenes/gameScene.js";
import { Character } from "./character.js";

export class Hero {
  character;

  lvl = 1;
  exp = 0;


  enemy;
  constructor() {
    this.character = new Character();
    this.character.sight = 6;
  }

  move(x, y) {
    this.character.move(x, y);
    dungeon.level.levelAttr.updateFieldOfView();
    
    gameScene.setCamera(...this.character.pos);
    gameScene.updateCellView();

    if (x !== 0) {
      this.character.sprite.characterSprite.reversed = x < 0;
    }
  }
}