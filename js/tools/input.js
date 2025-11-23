// import { resetResized, resized } from "../scenes/gameScene.js";
// import { initialDistance } from "../scenes/gameScene.js";
import { device } from "./device.js";

export const input = {
  register,
  pushLayer,
  insertLayer,
  addLayer,
  deleteLayer,
};


register(device.clickName, processClick);
// const handlers = new Set();

function register(name, callback, element) {
  if (element) {
    element.addEventListener(name, callback);
  } else {
    device.getDevice().addEventListener(name, callback);
  }
}

// function cancel(name, callback, element) {
//   if (element) {
//     element.removeEventListener(name, callback);
//   } else {
//     device.getDevice().removeEventListener(name, callback);
//   }
// }

let layers = [];

function processClick(event) {
  // console.log(event)
  // if (event?.touches?.length === 1) {
  //   return;
  // }
  for (const processor of layers) {
    if (processor(event)) {
      break;
    }
  }
  
  // alert(event.touches.length)

  // cancel(device.clickName, processClick);
  
  // register(device.clickName, processClick);
}

function pushLayer(processor) {
  layers.push(processor);
}

// temp
function insertLayer(processor, index) {
  layers.splice(index, 0, processor);
}

function addLayer(processor) {
  layers.unshift(processor);
}

function deleteLayer(processor) {
  layers = layers.filter((p) => {
    return p !== processor;
  });
}