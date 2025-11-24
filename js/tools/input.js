import { device } from "./device.js";

export const input = {
  register,
  pushLayer,
  insertLayer,
  addLayer,
  deleteLayer,
};


register(device.clickName, processClick);

function register(name, callback, element) {
  if (element) {
    element.addEventListener(name, callback);
  } else {
    device.getDevice().addEventListener(name, callback);
  }
}

let layers = [];

function processClick(event) {
  for (const processor of layers) {
    if (processor(event)) {
      break;
    }
  }
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