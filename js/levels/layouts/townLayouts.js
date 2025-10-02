import { terrain } from "../terrain.js";
// const M = terrain.;
const W = terrain.wall_ground;
const T = terrain.shrub;
const Z = terrain.high_grass;
const D = terrain.door;
const L = terrain.locked_door;

const E = terrain.empty;
const X = terrain.iron_maker;

const M = terrain.wall_deco;
const P = terrain.pedestal;
const F = terrain.empty_deco;
const O = terrain.empty_sp;
const A = terrain.well;
const B = terrain.bookshelf;

const U = terrain.statue;
const S = terrain.secret_door;
const R = terrain.water;
const Y = terrain.alchemy;
const G = terrain.statue_sp;
const C = terrain.tent;
const H = terrain.bed;
const I = terrain.embers;
const J = terrain.glass_wall;

export const townLayouts = [
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	O, 	O, 	O, 	M,
  M, 	M, 	M, 	M, 	E, 	M, 	T, 	M, 	M, 	M, 	M, 	M, 	E, 	E, 	M, 	M, 	M, 	M, 	M, 	R, 	R, 	R, 	A, 	W, 	W, 	W, 	W, 	W, 	W, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	M, 	M, 	M, 	M, 	M, 	O, 	E, 	O, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	W, 	S, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	T, 	C, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	J, 	O, 	O, 	G, 	O, 	O, 	O, 	W, 	W, 	W, 	W, 	W, 	W, 	O, 	O, 	O, 	M,
  M, 	M, 	O, 	E, 	E, 	E, 	L, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	T, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	W, 	O, 	O, 	G, 	G, 	G, 	O, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	D, 	M,
  M, 	M, 	O, 	E, 	T, 	E, 	J, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	T, 	W, 	W, 	S, 	W, 	W, 	O, 	G, 	G, 	G, 	W, 	E, 	E, 	D, 	O, 	O, 	O, 	O, 	O, 	O, 	L, 	O, 	O, 	O, 	H, 	W, 	M, 	M, 	E, 	M,
  M, 	M, 	O, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	W, 	W, 	W, 	W, 	J, 	W, 	W, 	M, 	M, 	E, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	W, 	O, 	O, 	W, 	R, 	R, 	R, 	M, 	M, 	E, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	G, 	G, 	G, 	O, 	W, 	E, 	E, 	W, 	W, 	J, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	W, 	W, 	P, 	P, 	O, 	O, 	D, 	O, 	H, 	J, 	R, 	R, 	R, 	R, 	M, 	E, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	G, 	O, 	O, 	O, 	W, 	E, 	E, 	W, 	R, 	J, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	O, 	O, 	W, 	R, 	R, 	R, 	R, 	M, 	E, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	G, 	O, 	O, 	O, 	J, 	E, 	E, 	W, 	R, 	J, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	W, 	D, 	W, 	D, 	W, 	W, 	W, 	W, 	R, 	R, 	R, 	U, 	T, 	E, 	M,
  M, 	M, 	M, 	M, 	E, 	E, 	W, 	W, 	W, 	D, 	W, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	W, 	W, 	J, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	O, 	O, 	W, 	O, 	O, 	O,  J, 	E, 	E, 	R, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	J, 	O, 	O, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	E, 	E, 	E, 	W, 	W, 	Y, 	O, 	O, 	W, 	E, 	E, 	E, 	W, 	O, 	H, 	W, 	O, 	H, 	O, 	W, 	W, 	W, 	D,  W, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E,  W, 	W, 	W, 	W, 	W, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	J, 	W, 	W, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	J, 	O, 	P, 	P, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	U, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	D, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	U, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	W, 	W, 	W, 	W, 	W, 	J, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	W, 	O, 	O, 	G, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	O, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	O, 	R, 	U, 	R, 	O, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	W, 	O, 	O, 	G, 	G, 	G, 	G, 	G, 	W, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	O, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	J, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	O, 	O, 	O, 	O, 	O, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	J, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	U, 	O, 	U, 	W, 	W, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	O, 	O, 	O, 	W, 	B, 	B, 	B, 	W, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	X, 	W, 	M, 	M, 	M,
  M, 	M, 	M, 	W, 	W, 	W, 	W, 	W, 	D, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	U, 	O, 	U, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	W, 	W, 	D, 	W, 	W, 	W, 	M, 	M, 	M, 
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	O, 	O, 	O, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	M, 	M, 	M, 
  M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	M, 	M, 	M, 
  M, 	M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	B, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	D, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	P, 	O, 	B, 	W, 	E, 	E, 	E, 	E, 	O, 	O, 	O, 	O, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	B, 	W, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	O, 	W, 	W, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	W, 	W, 	W, 	W, 	W, 	W, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	O, 	O, 	O, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	M, 	M, 	M, 
  M, 	M, 	W, 	I, 	F, 	F, 	F, 	W, 	T, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	W, 	F, 	F, 	I, 	F, 	T, 	T, 	T, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	B, 	B, 	B, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	O, 	R, 	R, 	R, 	M, 	M, 	M,
  M, 	M, 	W, 	F, 	F, 	F, 	F, 	T, 	T, 	T, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	W, 	W, 	W, 	W, 	W, 	E, 	E, 	E, 	E, 	E, 	E, 	O, 	O, 	O, 	O, 	M, 	M, 	M, 
  M, 	M, 	W, 	F, 	F, 	F, 	F, 	W, 	W, 	W, 	W, 	W, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	Z, 	Z, 	Z, 	Z, 	Z, 	Z, 	W, 	M, 	M, 	M,
  M, 	M, 	W, 	F, 	F, 	U, 	F, 	F, 	W, 	F, 	F, 	W, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	Z, 	Z, 	Z, 	Z, 	Z, 	Z, 	W, 	M, 	M, 	M,
  M, 	M, 	W, 	I, 	F, 	F, 	F, 	F, 	W, 	F, 	F, 	W, 	M, 	M, 	M, 	M, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	U, 	E, 	U, 	E, 	E, 	Z, 	Z, 	Z, 	Z, 	Z, 	Z, 	W, 	W, 	W, 	M,
  M, 	M, 	W, 	F, 	F, 	F, 	F, 	I, 	F, 	F, 	F, 	S, 	T, 	T, 	T, 	T, 	M, 	I, 	I, 	I, 	I, 	I, 	I, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	E, 	G, 	O, 	O, 	O, 	G, 	E, 	Z, 	Z, 	Z, 	Z, 	W, 	S, 	W, 	Z, 	W, 	M,
  M, 	M, 	W, 	F, 	F, 	F, 	F, 	F, 	W, 	F, 	F, 	W, 	M, 	M, 	M, 	M, 	M, 	O, 	I, 	I, 	I, 	I, 	O, 	E, 	E, 	E, 	M, 	M, 	E, 	E, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	E, 	Z, 	Z, 	Z, 	Z, 	S, 	Z, 	Z, 	Z, 	W, 	M,
  M, 	M, 	W, 	F, 	F, 	F, 	F, 	F, 	W, 	F, 	I, 	W, 	M, 	M, 	M, 	M, 	M, 	O, 	I, 	I, 	I, 	I, 	O, 	E, 	E, 	M, 	M, 	M, 	M, 	M, 	E, 	E, 	W, 	O, 	O, 	O, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	Z, 	O, 	O, 	W, 	M,
  M, 	M, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	W, 	M, 	M, 	M, 	M, 	M, 	O, 	O, 	O, 	O, 	O, 	O, 	E, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	W, 	W, 	W, 	W, 	W, 	M, 	M, 	M, 	M, 	W, 	Z, 	Z, 	O, 	O, 	W, 	M,
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	W, 	W, 	W, 	W, 	W, 	W, 	M,
  M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M, 	M
];
