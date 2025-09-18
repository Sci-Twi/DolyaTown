import Game from "./js/scene/gameScene.js";
import {map_dolya_block} from "/js/temp/dolya.js";
window.addEventListener("load", () => {
  new Game(map_dolya_block);
});