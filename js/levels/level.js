// import { tiles } from "../actor/tiles";

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

    // this.map = null;
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