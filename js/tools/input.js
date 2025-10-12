import { device } from "./device.js";

export const input = {
  register,
  pushLayer,
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
  // cancel(device.clickName, processClick);
  for (const processor of layers) {
    if (processor(event)) {
      break;
    }
  }
  // register(device.clickName, processClick);
}

function pushLayer(processor) {
  layers.push(processor);
}

function addLayer(processor) {
  layers.unshift(processor);
}

function deleteLayer(processor) {
  layers = layers.filter((p) => {
    return p !== processor;
  });
}