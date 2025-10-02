
const chasm = 0;
const empty = 1;
const grass = 2;
const empty_well = 3;
// const empty_well: 3,
const wall = 4;
const door = 5;
const open_door = 6;
const entrance = 7;
const exit = 8;
const embers = 9;
const locked_door = 10;
const pedestal = 11;
const wall_deco = 12;
const barricade = 13;
const empty_sp = 14;
const high_grass = 15;

const secret_door = 16;
const wall_ground = 22;

const empty_deco = 25;
  
const glass_wall = 31;

const iron_maker = 33;
const well = 34;
const statue = 35;
const statue_sp = 36;

const tent = 38;

const bed = 40;
const bookshelf = 41;
const alchemy = 42;

const shrub = 47;
const water = 63;


export const terrain = {
  chasm,
  empty,
  grass,
  empty_well,
  wall,
  door,
  open_door,
  entrance,
  exit,
  embers,
  locked_door,
  pedestal,
  wall_deco,
  barricade,
  empty_sp,
  high_grass,

  secret_door,
  wall_ground,

  empty_deco,
  
  glass_wall,

  iron_maker,
  well,
  statue,
  statue_sp,

  tent,

  bed,
  bookshelf,
  alchemy,
  
  shrub,
  water,
};

const passable = 1;
const los_blocking = 2;
const flamable = 4;
const secret = 8;
const solid = 16;
const avoid = 32;
const liquid = 64;
const pit = 128;
const unstitchable = 256;

export const flags = {
  passable,
  los_blocking,
  flamable,
  secret,
  solid,
  avoid,
  liquid,
  pit,

  unstitchable,
};
export const terrainFlag = [];

terrainFlag[chasm] = avoid | pit | unstitchable;
terrainFlag[empty] = passable;
terrainFlag[grass] = passable | flamable;
terrainFlag[empty_well] = passable;
terrainFlag[water] = passable | liquid | unstitchable ;
terrainFlag[wall] = los_blocking | solid | unstitchable | wall;
// terrainFlag[WALL_SP] = terrainFlag[WALL];
terrainFlag[glass_wall] = unstitchable;
terrainFlag[door] = passable | los_blocking | flamable | solid | unstitchable | wall ;
terrainFlag[open_door] = passable | flamable | unstitchable;
terrainFlag[entrance] = passable;
terrainFlag[exit] = passable;
terrainFlag[embers] = passable;
terrainFlag[locked_door] = los_blocking | solid | unstitchable | wall;
terrainFlag[pedestal] = passable | unstitchable;
terrainFlag[tent] = passable ;
terrainFlag[bed] = passable;
terrainFlag[wall_deco] = terrainFlag[wall];
//terrainFlag[BUY_WALL] = terrainFlag[WALL];

terrainFlag[barricade] = flamable | solid;
terrainFlag[empty_sp] = terrainFlag[empty] | unstitchable;

// terrainFlag[GROUND_A] = terrainFlag[EMPTY] | unstitchable;
// terrainFlag[FLOWER_POT] = terrainFlag[EMPTY] | unstitchable;
// terrainFlag[WALL_LIVER] = terrainFlag[WALL];
terrainFlag[wall_ground] = terrainFlag[wall];
// terrainFlag[BUY_WALL] = terrainFlag[WALL];



terrainFlag[high_grass] = passable | los_blocking | flamable;

// terrainFlag[OLD_HIGH_GRASS] = passable | los_blocking | flamable;

terrainFlag[secret_door] = terrainFlag[wall] | secret | unstitchable;
// terrainFlag[SECRET_TRAP]  = terrainFlag[EMPTY] | SECRET;
// terrainFlag[TRAP]         = AVOID;
// terrainFlag[INACTIVE_TRAP]= terrainFlag[EMPTY];

// terrainFlag[DEW_BLESS] = AVOID;
terrainFlag[iron_maker] = avoid;

terrainFlag[empty_deco] = terrainFlag[empty];
// terrainFlag[LOCKED_EXIT] = SOLID;
// terrainFlag[UNLOCKED_EXIT] = passable;
// terrainFlag[SIGN] =  AVOID | flamable;
terrainFlag[well] = avoid;
terrainFlag[statue] = 0;
terrainFlag[statue_sp] = terrainFlag[statue] | unstitchable;
// terrainFlag[BROKEN_DOOR] = terrainFlag[STATUE] | unstitchable;
terrainFlag[bookshelf] = terrainFlag[barricade] | los_blocking | unstitchable | wall;
terrainFlag[alchemy] = avoid;
terrainFlag[shrub] =  flamable | los_blocking | solid ;

// terrainFlag[CHASM_WALL] = terrainFlag[CHASM];
// terrainFlag[CHASM_FLOOR] = terrainFlag[CHASM];
// terrainFlag[CHASM_FLOOR_SP] = terrainFlag[CHASM];
// terrainFlag[CHASM_WATER] = terrainFlag[CHASM];

// terrainFlag[FLEECING_TRAP] = AVOID ;
// terrainFlag[WOOL_RUG] = passable;
// terrainFlag[SOKOBAN_SHEEP] = passable;
// terrainFlag[CORNER_SOKOBAN_SHEEP] = passable;
// terrainFlag[SWITCH_SOKOBAN_SHEEP] = passable;
// terrainFlag[CHANGE_SHEEP_TRAP] = passable;
// terrainFlag[SOKOBAN_ITEM_REVEAL] = passable;
// terrainFlag[SOKOBAN_HEAP] = passable;
// terrainFlag[BLACK_SOKOBAN_SHEEP] = passable;
// terrainFlag[SOKOBAN_PORT_SWITCH] = passable;
// terrainFlag[PORT_WELL] = passable;


export function checkFlag(block, flag) {
  return !!(terrainFlag[block] & flag);
}
