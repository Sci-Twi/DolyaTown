import { device } from "./device.js";

export const input = {
  register,
};

// const layers = [];

// const handlers = new Set();

function register(element, name, callback) {
  // TODO: delete element
  element.addEventListener(name, callback);
}

