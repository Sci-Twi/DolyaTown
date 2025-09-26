import { dungeon } from "../dungeon.js";
import { game } from "../game.js";
import { gameScene } from "./gameScene.js";


export const interLevelScene = {
  up,
  down,
  create,
  destroy,
};

function create() {
  console.log("creating inter level scene")

  this.down();

  game.switchScene(gameScene);
}


function destroy() {
  console.log("inter level scene destroyed")
}

function up() {
  
}

function down() {
  // if (dungeon.hero) {
  dungeon.init();
  // }
  const level = dungeon.newLevel();
  // console.log(level)

}