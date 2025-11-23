import { dungeon } from "../dungeon.js";
import { checkFlag, flags, terrain } from "../levels/terrain.js";
import { Actor } from "./actor.js";
export class Character {
  actor;
  sprite;

  pos;
  
  sight;

  constructor() {
    this.actor = new Actor();
  }

  linkSprite(spriteClass) {
    this.sprite = new spriteClass();
  }

  move(x, y) {
    const map = dungeon.level.levelAttr.map;
    
    const toX = x + this.pos[0];
    const toY = y + this.pos[1];

    if (toX < 0 || toX >= map.width || toY < 0 || toY >= map.height) {
      return;
    }
    if (!checkFlag(dungeon.level.levelAttr.map.get(toX, toY), flags.passable)) {
      return;
    }
    if (dungeon.level.levelAttr.getMob(toX, toY)) {
      return;
    }

    if (map.get(toX, toY) === terrain.high_grass) {
      map.set(toX, toY, terrain.grass);
    }

    this.pos = [toX, toY];
  }
}