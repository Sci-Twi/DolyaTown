

class GameCore {
  game;
  worldSize;
  #blockmap;
  #npcmap;
  constructor(game) {
    this.game = game;
    this.worldSize = [48, 48];
    this.player = [24, 24];

  }

  getMap() {
    return this.#blockmap;
  }

  // changePlayerCoor(coor) {
  //   const [x, y] = this.player;
  //   let t = this.#npcmap[y][x];
    
  // }

  move(move) {
    const [originX, originY] = this.player;
    // let moved = false;

    const toX = move[0] + originX;
    const toY = move[1] + originY;

    if (toX <= 0 || toX > 48 || toY <= 0 || toY > 48) {
      return;
    }
    if (this.getBlock([toX, toY]).type !== Block.FLOOR) {
      return;
    }
    if (this.getNPC([toX, toY])) {
      return;
    }


    const t = this.getNPC(this.player);
    this.#npcmap[toY][toX] = t;
    this.#npcmap[originY][originX] = null;
    this.player[0] = toX;
    this.player[1] = toY;
    
  }

  getBlock([x, y]) {
    if (x < 1 || y < 1 || x >= this.worldSize[0] || y >= this.worldSize[1]) {
      return null;
    }
    return this.#blockmap[y][x];
  }
  getNPC([x, y]) {
    if (x < 1 || y < 1 || x >= this.worldSize[0] || y >= this.worldSize[1]) {
      return null;
    }
    return this.#npcmap[y][x];

  }
  // serMap(map) {
  // }
  
  initMap(map) {
    this.game.gameview.initRenderData();
    // customize

    // for (let y = 0; y < 32; y++) {
    //   this.#blockmap[y] = [];
    //   for (let x = 0; x < 32; x++) {
    //     this.#blockmap[y][x] = new Block(Block.FLOOR, "ground0");
    //     if (y === 14 && x < 14) {
    //       this.#blockmap[y][x] = new Block(Block.FLOOR, "wall0");
    //     }
    //   }
    // }

    this.#blockmap = [];
    for (let y = 0; y < this.worldSize[1]; y++) {
      this.#blockmap[y] = [];
      for (let x = 0; x < this.worldSize[0]; x++) {
        this.#blockmap[y][x] = new Block(blockMap[map[y][x]]);
      }
    }

    this.#npcmap = [];
    for (let y = 0; y < this.worldSize[1]; y++) {
      this.#npcmap[y] = [];
    }
    for (const npc in npcMap) {
      const [x, y] = npcMap[npc].coor;
      this.#npcmap[y][x] = new NPC(npcMap[npc]);
    }

    this.game.gameview.initMap();


  }
}


class Block {
  type;
  name;
  coor;

  // static NULL = -1;
  static FLOOR = 0;
  static WALL = 1;
  // static BUILDING = 2;

  constructor({type, name}) {
    // ...Object.create()
    this.type = type;
    this.name = name;
  }
}

class NPC {
  name;
  frames;

  constructor({name, frames}) {
    this.name = name;
    this.frames = frames;
  }
}


// const textureMap = new Map();
// textureMap.set("ground0");

