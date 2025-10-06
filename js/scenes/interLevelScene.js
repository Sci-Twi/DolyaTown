import { dungeon } from "../dungeon.js";
import { game } from "../game.js";
import { gameScene } from "./gameScene.js";
import { textureCache } from "../tools/textureCache.js";
import { assets } from "../assets.js";

export const interLevelScene = {
  up,
  down,
  create,
  destroy,
};

async function create() {
  console.log("creating inter level scene")
  
  await textureCache.loadTextures(Object.keys(assets));

  this.down();

  game.switchScene(gameScene);
}


function destroy() {
  console.log("inter level scene destroyed")
}

function up() {
  
}


// this should be in dungeon.js
function down() {
  if (!dungeon.hero) {
    dungeon.init();
  }
  dungeon.newLevel();
}