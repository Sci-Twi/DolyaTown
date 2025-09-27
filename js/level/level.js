// import { tiles } from "../actor/tiles";

export class Level {
  mapWidth;
  mapHeight;
  map = null;
  mobs = null;

  constructor(width, height) {
    this.mapWidth = width;
    this.mapHeight = height;
    // this.map = null;
  }

  getTile(x, y) {
    return this.map[this.mapWidth * y + x];
  }
}