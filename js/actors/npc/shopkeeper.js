import { Mob } from "../mob.js";
import { ShopKeeperSprite } from "../../sprites/npc/shopkeeper.js";


export class ShopKeeper {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(ShopKeeperSprite);
  }
}