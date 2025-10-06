// import { tiles } from "../actor/tiles";

import { Shadow } from "../mechanics/shadow.js";

export class Level {
  map;
  visited;

  mobs;
  fieldOfView;

  constructor(width, height) {

    this.map = new Map2D(width, height);

    this.visited = new Map2D(width, height);
    this.visited.fill(false);
    
    this.mobs = new Set();
    this.mobs2D = new Map2D(width, height);

    this.fieldOfView = new Map2D(width, height);
    this.shadow = new Shadow(this.fieldOfView);
    
  }

  addMob(mob) {
    this.mobs.add(mob);
    this.mobs2D.set(...mob.mob.character.pos, mob);
  }

  updateFieldOfView() {

  }
}

class Map2D {
  width;
  height;
  mapArray;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.mapArray = [];
  }
  get(x, y) {
    return this.mapArray[y * this.width + x];
  }
  set(x, y, value) {
    this.mapArray[x + y * this.width] = value;
  }
  setMapArray(arr) {
    this.mapArray = arr;
  }
  fill(value) {
    this.mapArray.length = this.width * this.height;
    this.mapArray.fill(value);
  }
}

