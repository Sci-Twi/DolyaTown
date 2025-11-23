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
import { getDistance } from "../tools/touch.js";
import { Yell } from "../ui/yell.js";
import { texts } from "../text/text.js";
import { getLanguage } from "../text/language.js";

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
    dungeon.level.levelAttr.ui.push(new Yell(""));

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
  // console.log(event)
  const clientX = device.isPhone ? event.changedTouches[0].clientX : event.clientX;
  const clientY = device.isPhone ? event.changedTouches[0].clientY : event.clientY;
  for (const ui of dungeon.level.levelAttr.ui) {
    if (clientX < ui.uiAttr.dx || clientX > ui.uiAttr.dx + ui.uiAttr.dWidth || clientY < ui.uiAttr.dy || clientY > ui.uiAttr.dy + ui.uiAttr.dHeight) {
      continue;
    }
    return ui.onClick();
  }

  return false;
}

function gameClick(event) {
  
  if (resized) {
    if (event.touches.length === 0) {
      resetResized();
    }
    return;
  }
  const num = pixelSize * 16;

  const clientX = device.isPhone ? event.changedTouches[0].clientX : event.clientX;
  const clientY = device.isPhone ? event.changedTouches[0].clientY : event.clientY;
  
  // not good here
  const biasX = Math.floor((clientX - device.midx - num / 2) / num) + 1;
  const biasY = Math.floor((clientY - device.midy - num / 2) / num) + 1;

  const x = camera[0] + biasX;
  const y = camera[1] + biasY;
  
  const hero = dungeon.hero.heroAttr.character.pos;
  if (hero[0] === x && hero[1] === y) {
    heroClick();
    return true;
  }

  if (dungeon.level.levelAttr.shadow.isLit(x, y)) {
    const npc = dungeon.level.levelAttr.mobs2D.get(x, y);
    if (npc) {
      npcClick(npc);
      return true;
    }
  }

  // pathfinder
  if (checkFlag(dungeon.level.levelAttr.map.get(x, y), flags.passable)) {
    if (dungeon.level.levelAttr.visited.get(x, y) || debug.lightMode) {
      mapClick(x, y);
    }
    return true;
  }

  return false;
}

function heroClick() {
  const level = dungeon.level.levelAttr;
  const heroText = texts[getLanguage()][dungeon.hero.heroAttr.character.sprite.getTextureName()].text;
  level.getUI(Yell).changeText(`${heroText.name}： ${heroText.yells[Math.floor(Math.random() * heroText.yells.length)]}`);
}

function npcClick(npc) {

  // yell
  const level = dungeon.level.levelAttr;
  
  // console.log(npc)
  // if (!level.getUI(Yell)) {
  //   const npcText = texts[getLanguage()][npc.mob.character.sprite.getTextureName()].text;
  //   level.ui.push(new Yell(`${npcText.name}： ${npcText.yells[Math.floor(Math.random() * npcText.yells.length)]}`));
  // }


  const npcText = texts[getLanguage()][npc.mob.character.sprite.getTextureName()].text;

  level.getUI(Yell).changeText(`${npcText.name}： ${npcText.yells[Math.floor(Math.random() * npcText.yells.length)]}`);
  
  // hero

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


// temp move
let stopMoving = false;

async function multiMove(moves) {
  stopMoving = false;
  input.addLayer(stopMove);

  // let firstMoving = true;
  
  for (const m of moves) {
    if (stopMoving) {
      break;
    }
    // if (firstMoving) {
    //   await delay(50);
    //   alert(1)
    //   firstMoving = false;
    // }
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



// drag

input.register("touchstart", resizeTouchStart);
input.register("touchmove", resizeTouchMove);
input.register("touchend", resizeTouchEnd);

// TODO: remove these to touch.js
let touches;
export let initialDistance = 0;
// let scaled = 0;

export let resized = false;
// let initialPixelSize;
function resizeTouchStart(event) {
  // touches = Array.from(event.touches);
  if (event.touches.length !== 2) {
    return;
  }
  initialDistance = getDistance(...event.touches);
  // initialPixelSize = pixelSize;
  // alert(initialDistance)

}

function resizeTouchMove(event) {
  if (event.touches.length !== 2) {
    return;
  }
  touches = Array.from(event.touches);
  event.preventDefault();
  // alert(2)
  if (initialDistance === 0) {
    return;
  }
  const distance = getDistance(...touches);

  const scale = Math.max(Math.min(Math.trunc((distance - initialDistance) / 80), 1), -1);
  
  if (scale === 0) {
    return;
  }
  // console.log(scale)
  // alert(pixelSize * scale)
  resized = true;
  initialDistance = distance;
  const ps = Math.min(Math.max(pixelSize + scale, 1), 12);
  // scaled = scale;
  // initialDistance = distance;
  // if (ps !== pixelSize) {
  //   return;
  // }
  setPixelSize(ps);
  updateCellView();

}

function resizeTouchEnd(event) {
  if (event.touches.length < 2) {
    initialDistance = 0;
    // scaled = 0;
  }
}

export function resetResized() {
  resized = false;
}