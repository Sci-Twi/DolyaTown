import { device } from "../tools/device.js";
import { keyboard } from "../keyboard.js";
import { TilesMap } from "../sprites/tiles.js";
// import { win } from "../ui/win.js";
import { game } from "../game.js";
import { MobsMap } from "../sprites/mobs.js";
import { ShadowMap } from "../sprites/shadow.js";
import { input } from "../tools/input.js";
import { checkFlag, flags } from "../levels/terrain.js";
import { dungeon } from "../dungeon.js";
import { debug } from "../tools/debug.js";
import { pathFinder } from "../mechanics/pathFinder.js";
import { UIMap } from "../sprites/ui.js";
import { Search } from "../ui/search.js";

export let cellView = {
  startCoor: [],
  halfLength: [],
};

export let pixelSize = 0;
export let camera = [];

export const gameScene = {

  tilesMap: null,
  mobsMap: null,
  shadowMap: null,
  uiMap: null,

  async create() {
    console.log("creating game scene")

    pixelSize = 8;
    camera = [25, 21];

    updateCellView();

    // should i inject dungeon.level.levelAttr...?
    

    this.tilesMap = new TilesMap();
    
    this.mobsMap = new MobsMap();

    this.shadowMap = new ShadowMap();

    this.uiMap = new UIMap();

    dungeon.level.levelAttr.ui.push(new Search());
    
    // keyboard.addListener("gameScene");

    game.render();
    
    input.register("wheel", resize);
    
    input.pushLayer(uiClick);
    input.pushLayer(gameClick);

    // win.initWindow();

  },

  updateCellView,
  setPixelSize,
  render() {
    this.tilesMap.render();
    this.mobsMap.render();
    this.shadowMap.render();
    this.uiMap.render();
  },

  setCamera,
  
  // calculate dx dy by ps and camera (cellview)
  calcScreenCoor,
};

function calcScreenCoor(x, y) {
  if (x < camera[0] - cellView.halfLength[0] || x > camera[0] + cellView.halfLength[0] || y < camera[1] - cellView.halfLength[1] || y > camera + cellView.halfLength[1]) {
    return null;
  }
  return [cellView.startCoor[0] + (x - camera[0] + cellView.halfLength[0]) * pixelSize * 16, cellView.startCoor[1] + (y - camera[1] + cellView.halfLength[1]) * pixelSize * 16];
}

function setPixelSize(ps) {
  pixelSize = ps;
}

function setCamera(x, y) {
  camera = [x, y];
}

function updateCellView() {
  const ps = pixelSize;
  let startX = ((device.width - ps * 16) / 2) % (ps * 16);
  let startY = ((device.height - ps * 16) / 2) % (ps * 16);
  startX = startX === 0 ? startX : startX - ps * 16;
  startY = startY === 0 ? startY : startY - ps * 16;
  const halfWidth = Math.ceil(((device.width - ps * 16) / 2) / (ps * 16));
  const halfHeight = Math.ceil(((device.height - ps * 16) / 2) / (ps * 16));

  cellView = {
    startCoor: [startX, startY],
    halfLength: [halfWidth, halfHeight],
  };

}


function resize(event) {
  const isBigger = event.deltaY < 0;
  let ps = pixelSize;
  if (isBigger) {
    if (ps === 12) {
      return;
    }
    ps += 1;
  } else {
    if (ps === 1) {
      return;
    }
    ps -= 1;
  }
  pixelSize = ps;
  updateCellView();
  gameScene.render();
}

function uiClick(event) {
  const clientX = device.isPhone ? event.touches[0].clientX : event.clientX;
  const clientY = device.isPhone ? event.touches[0].clientY : event.clientY;
  for (const ui of dungeon.level.levelAttr.ui) {
    if (clientX < ui.uiAttr.dx || clientX > ui.uiAttr.dx + ui.uiAttr.dWidth || clientY < ui.uiAttr.dy || clientY > ui.uiAttr.dy + ui.uiAttr.dHeight) {
      continue;
    }
    return ui.onClick();
  }

  return false;
}

function gameClick(event) {
  const num = pixelSize * 16;

  const clientX = device.isPhone ? event.touches[0].clientX : event.clientX;
  const clientY = device.isPhone ? event.touches[0].clientY : event.clientY;
  
  // not good here
  const biasX = Math.floor((clientX - device.midx - num / 2) / num) + 1;
  const biasY = Math.floor((clientY - device.midy - num / 2) / num) + 1;

  const x = camera[0] + biasX;
  const y = camera[1] + biasY;

  if (dungeon.level.levelAttr.shadow.isLit(x, y)) {
    if (dungeon.level.levelAttr.mobs2D.get(x, y)) {
      npcClick(x, y);
      return true;
    }
  }

  if (checkFlag(dungeon.level.levelAttr.map.get(x, y), flags.passable)) {
    if (dungeon.level.levelAttr.visited.get(x, y) || debug.lightMode) {
      mapClick(x, y);
    }
    return true;
  }

  return false;
}

function npcClick(x, y) {
  // dont delete
  // const name = this.getNPC(to).name;
  // const text = npcMap[name].text;
  // this.game.gameview.currentAnimation = name;
  // win.renderWindow(text, this.game.gameview);
  // this.game.gameview.yell(text);

  // yell({name, yells}) {
  //   document.getElementById("yell").innerText = `${name}： ${yells[Math.floor(Math.random() * yells.length)]}`;  
  // }

  

  // removeWindowHandler = () => {
  //   const windowCanvas = document.getElementById("windowcanvas");
  //   windowCanvas.getContext("2d").clearRect(0, 0, windowCanvas.width, windowCanvas.height);
    
  //   document.getElementById("windowdescription").innerText = "";
  //   document.getElementById("windowname").innerText = "";
  //   document.getElementById("windowanimation").getContext("2d").clearRect(0, 0, 96, 96);
  //   this.initClick();
  //   document.getElementById("canvasback").removeEventListener(device.clickName, this.removeWindowHandler);

  // }
}

function mapClick(x, y) {
  multiMove(pathFinder.findPath(dungeon.hero.heroAttr.character.pos, [x, y]));
}


// temp
let stopMoving = false;
async function multiMove(moves) {
  stopMoving = false;
  input.addLayer(stopMove);


  
  for (const m of moves) {
    if (stopMoving) {
      break;
    }
    dungeon.hero.heroAttr.move(...m);
    await delay(100);
  }
  input.deleteLayer(stopMove);
}
async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function stopMove() {
  stopMoving = true;
  return true;
}

// sadly, no dragging for now
// initDrag() {
// }