import { dungeon } from "../dungeon.js";

export class UIMap {
  ui;
  constructor() {
    // dont blame it on me, i dont like oop, and now i find that i dont like dependency injection
    // this.ui = dungeon.level.levelAttr.ui;
  }

  render() {
    for (const ui of dungeon.level.levelAttr.ui) {
      ui.render();
    }
  }
}