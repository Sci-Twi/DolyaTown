// import { Hero } from "./actors/hero.js";
import { Hmdzl001 } from "./actors/hero/hmdzl001.js";
import { TownLevel } from "./levels/levels/townLevel.js";

export const dungeon = {
  depth: 0,
  level: null,
  hero: null,
  newLevel() {
    this.level = null;
    // actor.clear();
    this.depth++;

    switch (this.depth) {
      case 1:
        this.level = new TownLevel();
        break;
      default:
    }
    return this.level;
  },

  init() {
    // this.hero = new Hero();
    this.hero = new Hmdzl001();
  }
};

