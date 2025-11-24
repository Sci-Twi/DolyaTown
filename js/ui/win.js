import { canvas } from "../tools/canvas.js";

export const win = {
  renderWindow,
};


export function renderWindow(textureCanvas, sx, sy, oldTriangleLength, oldRowSideLength, oldColumnSideLength, dx, dy, triangleLength, rowSideLength, columnSideLength) {
  // i dont like these but...
  // triangles
  canvas.draw(textureCanvas, sx, sy, oldTriangleLength, oldTriangleLength, dx, dy, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy, oldTriangleLength, oldTriangleLength, dx + triangleLength + rowSideLength, dy, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx, sy + oldTriangleLength + oldColumnSideLength, oldTriangleLength, oldTriangleLength, dx, dy + triangleLength + columnSideLength, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy + oldTriangleLength + oldColumnSideLength, oldTriangleLength, oldTriangleLength, dx + triangleLength + rowSideLength, dy + triangleLength + columnSideLength, triangleLength, triangleLength);
  // sides
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy, oldRowSideLength, oldTriangleLength, dx + triangleLength, dy, rowSideLength, triangleLength);
  canvas.draw(textureCanvas, sx, sy + oldTriangleLength, oldTriangleLength, oldColumnSideLength, dx, dy + triangleLength, triangleLength, columnSideLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy + oldTriangleLength + oldColumnSideLength, oldRowSideLength, oldTriangleLength, dx + triangleLength, dy + triangleLength + columnSideLength, rowSideLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy + oldTriangleLength, oldTriangleLength, oldColumnSideLength, dx + triangleLength + rowSideLength, dy + triangleLength, triangleLength, columnSideLength);
  // mid
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy + oldTriangleLength, oldRowSideLength, oldColumnSideLength, dx + triangleLength, dy + triangleLength, rowSideLength, columnSideLength);
}