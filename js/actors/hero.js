import { dungeon } from "../dungeon.js";
import { terrain } from "../levels/terrain.js";
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

  search() {
    const pos = this.character.pos;
    const [x, y] = pos;
    const toSearch = [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y - 1], [x - 1, y + 1]];
    
    for (const search of toSearch) {
      const map = dungeon.level.levelAttr.map;
      const block = map.get(...search);
      if (block === terrain.secret_door) {
        map.set(...search, terrain.door);
        continue;
      }
      if (block === terrain.shrub) {
        map.set(...search, terrain.empty);
      }
    }
    
  }
}