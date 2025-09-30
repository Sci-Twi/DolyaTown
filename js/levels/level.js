// import { tiles } from "../actor/tiles";

export class Level {
  width;
  height;
  length;
  map = null;
  mobs = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.length = width * height;
    this.fieldOfView = [];
    this.mobs = new Set();

    // this.map = null;
  }

  getTile(x, y) {
    return this.map[this.width * y + x];
  }
}