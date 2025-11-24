import { debug } from "../tools/debug.js";
import { dungeon } from "../dungeon.js";
import { checkFlag, flags } from "../levels/terrain.js";

export const pathFinder = {
  findPath,
};

// warning: this function is old and bad. will be rewrited in some day.

function findPath(from, to) {
  // is this fast?
  const pathMap = [];
  for (let i = 1; i <= 48; i++) {
    pathMap[i] = [];
  }
  // bruh
  pathMap[from[1]][from[0]] = "start";

  let toBeFind = [from];
  let found = false;

  // ...dont wanna talk about it
  let maxTimes = 0;
  while (!found && maxTimes < 100) {
    maxTimes += 1;
    let newFind = [];
    for (const coor of toBeFind) {
      const [x, y] = coor;
      const toFind = [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y - 1], [x - 1, y + 1]].filter((c) => {
        return (checkFlag(dungeon.level.levelAttr.map.get(...c), flags.passable)) && ((to[0] === c[0] && to[1] === c[1]) ? true : !dungeon.level.levelAttr.getMob(...c)) && !pathMap[c[1]][c[0]] && (dungeon.level.levelAttr.visited.get(...c) || debug.lightMode);
      });

      for (const c of toFind) {
        newFind.push(c);
        pathMap[c[1]][c[0]] = coor;
        if (c[0] === to[0] && c[1] === to[1]) {
          found = c;
          break;
        }
      }
    }
    toBeFind = newFind;
  }

  if (!found) {
    return [];
  }

  // found
  let reverse = to;
  const result = [];
  while (true) {
    const next = pathMap[reverse[1]][reverse[0]];
    if (next !== "start") {
      result.push([reverse[0] - next[0], reverse[1] - next[1]]);
      reverse = next;
    } else {
      break;
    }
  }
  return result.reverse();
}