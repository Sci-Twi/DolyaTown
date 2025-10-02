export const terrain = {
  chasm: 0,
  empty: 1,
  grass: 2,
  empty_well: 3,
  wall: 4,
  door: 5,
  open_door: 6,
  entrance: 7,
  exit: 8,
  embers: 9,
  locked_door: 10,
  pedestal: 11,
  wall_deco: 12,
  barricade: 13,
  empty_sp: 14,
  high_grass: 15,

  secret_door: 16,
  wall_ground: 22,

  empty_deco: 25,
  
  glass_wall: 31,

  iron_maker: 33,
  well: 34,
  statue: 35,
  statue_sp: 36,

  tent: 38,

  bed: 40,
  bookshelf: 41,
  alchemy: 42,
  
  water: 63,
};

const flags = {
  passable: 1,
  los_blocking: 2,
  flamable: 4,
  secret: 8,
  solid: 16,
  avoid: 32,
  liquid: 64,
  pit: 128,

  unstichable: 256,
};
export const terrainFlag = [];
// flag[0] = 