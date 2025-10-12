import { Level } from "../level.js";
import { townLayouts } from "../layouts/townLayouts.js";
import { Apostle } from "../../actors/npc/apostle.js";
import { dungeon } from "../../dungeon.js";
import { Otiluke } from "../../actors/npc/otiluke.js";
import { Udawos } from "../../actors/npc/udawos.js";
import { TypedScroll } from "../../actors/npc/typedscroll.js";
import { G2159687 } from "../../actors/npc/g2159687.js";
import { ConsideredHamster } from "../../actors/npc/consideredhamster.js";
import { Evan } from "../../actors/npc/evan.js";
import { Watabou } from "../../actors/npc/watabou.js";
import { Bilboldev } from "../../actors/npc/bilboldev.js";
import { Xixizero } from "../../actors/npc/xixizero.js";
import { WhiteGhost } from "../../actors/npc/whiteghost.js";
import { Millilitre } from "../../actors/npc/millilitre.js";
import { Nyrds } from "../../actors/npc/nyrds.js";
import { Hbb } from "../../actors/npc/hbb.js";
import { Sfb } from "../../actors/npc/sfb.js";
import { Flyling } from "../../actors/npc/flyling.js";
import { Honeypoooot } from "../../actors/npc/honeypoooot.js";
import { Omicronrg9 } from "../../actors/npc/omicronrg9.js";
import { Jinkeloid } from "../../actors/npc/jinkeloid.js";
import { AshWolf } from "../../actors/npc/ashwolf.js";
import { Tempest102 } from "../../actors/npc/tempest102.js";
import { RustyBlade } from "../../actors/npc/rustyblade.js";
import { RainTrainer } from "../../actors/npc/raintrainer.js";
import { Xavier251998 } from "../../actors/npc/xavier251998.js";
import { Atv9 } from "../../actors/npc/atv9.js";
import { Uncles } from "../../actors/npc/uncles.js";
import { SaidBySun } from "../../actors/npc/saidbysun.js";
import { Sp931 } from "../../actors/npc/sp931.js";
import { DreamPlayer } from "../../actors/npc/dreamplayer.js";
import { Lery } from "../../actors/npc/lery.js";
import { RealMan } from "../../actors/npc/realman.js";
import { Lyn } from "../../actors/npc/lyn.js";
import { BlackMeow } from "../../actors/npc/blackmeow.js";
import { CatSheep } from "../../actors/npc/catsheep.js";
import { Kostis12345 } from "../../actors/npc/kostis12345.js";
import { Ren } from "../../actors/npc/ren.js";
import { Lynn } from "../../actors/npc/lynn.js";
import { RavenWolf } from "../../actors/npc/ravenwolf.js";
import { Ice13 } from "../../actors/npc/ice13.js";
import { FruitCat } from "../../actors/npc/fruitcat.js";
import { Locastan } from "../../actors/npc/locastan.js";
import { GoblinPlayer } from "../../actors/npc/goblinplayer.js";
import { Dachhack } from "../../actors/npc/dachhack.js";
import { MemoryOfSand } from "../../actors/npc/memoryofsand.js";
import { AFly } from "../../actors/npc/afly.js";
import { BoneStar } from "../../actors/npc/bonestar.js";
import { Ahorse } from "../../actors/npc/ahorse.js";
import { Shower } from "../../actors/npc/shower.js";
import { Sadsaltan } from "../../actors/npc/sadsaltan.js";
import { NoodleMire } from "../../actors/npc/noodlemire.js";
import { Juh9870 } from "../../actors/npc/juh9870.js";
import { NutPainter } from "../../actors/npc/nutpainter.js";
import { StormAndRain } from "../../actors/npc/stormandrain.js";
import { OldNewsTwist } from "../../actors/npc/oldnewstwist.js";
import { AdultDragonViolet } from "../../actors/mob/adultdragonviolet.js";
import { Scarecrow } from "../../actors/mob/scarecrow.js";
import { Piranha } from "../../actors/mob/piranha.js";
import { ShopKeeper } from "../../actors/npc/shopkeeper.js";
import { Laji } from "../../actors/npc/laji.js";
import { HateSokoban } from "../../actors/npc/hatesokoban.js";

export class TownLevel {
  levelAttr;
  constructor() {

    // stupid hump i just fell out of a jeep
    this.levelAttr = new Level(48, 48);
    this.levelAttr.map.setMapArray([...townLayouts]);

    dungeon.hero.heroAttr.character.pos = [25, 21];

    const apostle = new Apostle();
    apostle.mob.character.pos = [20, 21];
    this.levelAttr.addMob(apostle);

    const otiluke = new Otiluke();
    otiluke.mob.character.pos = [32, 15];
    this.levelAttr.addMob(otiluke);

    const udawos = new Udawos();
    udawos.mob.character.pos = [33, 34];
    this.levelAttr.addMob(udawos);

    const typedScroll = new TypedScroll();
    typedScroll.mob.character.pos = [9, 23];
    this.levelAttr.addMob(typedScroll);
    
    const g2159687 = new G2159687();
    g2159687.mob.character.pos = [35, 3];
    this.levelAttr.addMob(g2159687);

    const consideredHamster = new ConsideredHamster();
    consideredHamster.mob.character.pos = [26, 10];
    this.levelAttr.addMob(consideredHamster);
    
    const evan = new Evan();
    evan.mob.character.pos = [27, 31];
    this.levelAttr.addMob(evan);
    
    const watabou = new Watabou();
    watabou.mob.character.pos = [42, 42];
    this.levelAttr.addMob(watabou);
    
    const bilboldev = new Bilboldev();
    bilboldev.mob.character.pos = [24, 10];
    this.levelAttr.addMob(bilboldev);

    const xixizero = new Xixizero();
    xixizero.mob.character.pos = [25, 11];
    this.levelAttr.addMob(xixizero);

    const whiteGhost = new WhiteGhost();
    whiteGhost.mob.character.pos = [45, 44];
    this.levelAttr.addMob(whiteGhost);

    const millilitre = new Millilitre();
    millilitre.mob.character.pos = [45, 42];
    this.levelAttr.addMob(millilitre);
    
    const nyrds = new Nyrds();
    nyrds.mob.character.pos = [13, 11];
    this.levelAttr.addMob(nyrds);

    const hbb = new Hbb();
    hbb.mob.character.pos = [43, 15];
    this.levelAttr.addMob(hbb);
    
    const sfb = new Sfb();
    sfb.mob.character.pos = [33, 11];
    this.levelAttr.addMob(sfb);
    
    const flyling = new Flyling();
    flyling.mob.character.pos = [37, 12];
    this.levelAttr.addMob(flyling);

    const honeypoooot = new Honeypoooot();
    honeypoooot.mob.character.pos = [40, 15];
    this.levelAttr.addMob(honeypoooot);

    const omicronrg9 = new Omicronrg9();
    omicronrg9.mob.character.pos = [36, 11];
    this.levelAttr.addMob(omicronrg9);

    const jinkeloid = new Jinkeloid();
    jinkeloid.mob.character.pos = [43, 14];
    this.levelAttr.addMob(jinkeloid);

    const ashwolf = new AshWolf();
    ashwolf.mob.character.pos = [40, 36];
    this.levelAttr.addMob(ashwolf);

    const tempest102 = new Tempest102();
    tempest102.mob.character.pos = [33, 42];
    this.levelAttr.addMob(tempest102);

    const rustyblade = new RustyBlade();
    rustyblade.mob.character.pos = [22, 42];
    this.levelAttr.addMob(rustyblade);

    const rainTrainer = new RainTrainer();
    rainTrainer.mob.character.pos = [17, 42];
    this.levelAttr.addMob(rainTrainer);

    const xavier251998 = new Xavier251998();
    xavier251998.mob.character.pos = [14, 33];
    this.levelAttr.addMob(xavier251998);

    const atv9 = new Atv9();
    atv9.mob.character.pos = [43, 17];
    this.levelAttr.addMob(atv9);

    const uncles = new Uncles();
    uncles.mob.character.pos = [43, 22];
    this.levelAttr.addMob(uncles);

    const saidBySun = new SaidBySun();
    saidBySun.mob.character.pos = [42, 45];
    this.levelAttr.addMob(saidBySun);

    const sp931 = new Sp931();
    sp931.mob.character.pos = [40, 16];
    this.levelAttr.addMob(sp931);

    const dreamPlayer = new DreamPlayer();
    dreamPlayer.mob.character.pos = [43, 24];
    this.levelAttr.addMob(dreamPlayer);

    const lery = new Lery();
    lery.mob.character.pos = [41, 9];
    this.levelAttr.addMob(lery);

    const realMan = new RealMan();
    realMan.mob.character.pos = [44, 45];
    this.levelAttr.addMob(realMan);
    
    const lyn = new Lyn();
    lyn.mob.character.pos = [40, 22];
    this.levelAttr.addMob(lyn);

    const blackMeow = new BlackMeow();
    blackMeow.mob.character.pos = [38, 38];
    this.levelAttr.addMob(blackMeow);
    
    const catSheep = new CatSheep();
    catSheep.mob.character.pos = [37, 37];
    this.levelAttr.addMob(catSheep);

    const kostis12345 = new Kostis12345();
    kostis12345.mob.character.pos = [20, 25];
    this.levelAttr.addMob(kostis12345);

    const ren = new Ren();
    ren.mob.character.pos = [28, 27];
    this.levelAttr.addMob(ren);

    const lynn = new Lynn();
    lynn.mob.character.pos = [31, 32];
    this.levelAttr.addMob(lynn);

    const ravenWolf = new RavenWolf();
    ravenWolf.mob.character.pos = [23, 6];
    this.levelAttr.addMob(ravenWolf);

    const ice13 = new Ice13();
    ice13.mob.character.pos = [29, 32];
    this.levelAttr.addMob(ice13);

    const fruitCat = new FruitCat();
    fruitCat.mob.character.pos = [45, 2];
    this.levelAttr.addMob(fruitCat);

    const locastan = new Locastan();
    locastan.mob.character.pos = [5, 5];
    this.levelAttr.addMob(locastan);

    const goblinPlayer = new GoblinPlayer();
    goblinPlayer.mob.character.pos = [2, 5];
    this.levelAttr.addMob(goblinPlayer);

    const dachhack = new Dachhack();
    dachhack.mob.character.pos = [37, 3];
    this.levelAttr.addMob(dachhack);

    const memoryOfSand = new MemoryOfSand();
    memoryOfSand.mob.character.pos = [26, 4];
    this.levelAttr.addMob(memoryOfSand);

    const aFly = new AFly();
    aFly.mob.character.pos = [27, 17];
    this.levelAttr.addMob(aFly);

    const boneStar = new BoneStar();
    boneStar.mob.character.pos = [21, 9];
    this.levelAttr.addMob(boneStar);

    const aHorse = new Ahorse();
    aHorse.mob.character.pos = [28, 6];
    this.levelAttr.addMob(aHorse);

    const shower = new Shower();
    shower.mob.character.pos = [30, 19];
    this.levelAttr.addMob(shower);

    const noodleMire = new NoodleMire();
    noodleMire.mob.character.pos = [31, 20];
    this.levelAttr.addMob(noodleMire);

    const sadsaltan = new Sadsaltan();
    sadsaltan.mob.character.pos = [42, 38];
    this.levelAttr.addMob(sadsaltan);

    const juh9870 = new Juh9870();
    juh9870.mob.character.pos = [35, 6];
    this.levelAttr.addMob(juh9870);

    const nutPainter = new NutPainter();
    nutPainter.mob.character.pos = [16, 21];
    this.levelAttr.addMob(nutPainter);
    
    const shopKeeper1 = new ShopKeeper();
    shopKeeper1.mob.character.pos = [13, 10];
    this.levelAttr.addMob(shopKeeper1);

    const shopKeeper2 = new ShopKeeper();
    shopKeeper2.mob.character.pos = [8, 23];
    this.levelAttr.addMob(shopKeeper2);

    const stormAndRain = new StormAndRain();
    stormAndRain.mob.character.pos = [21, 6];
    this.levelAttr.addMob(stormAndRain);

    const laji = new Laji();
    laji.mob.character.pos = [23, 12];
    this.levelAttr.addMob(laji);

    const hatesokoban = new HateSokoban();
    hatesokoban.mob.character.pos = [23, 10];
    this.levelAttr.addMob(hatesokoban);

    const oldnewstwist = new OldNewsTwist();
    oldnewstwist.mob.character.pos = [20, 3];
    this.levelAttr.addMob(oldnewstwist);

    // mobs
    const dragon = new AdultDragonViolet();
    dragon.mob.character.pos = [5, 43];
    this.levelAttr.addMob(dragon);

    const scarecrow = new Scarecrow();
    scarecrow.mob.character.pos = [18, 44];
    this.levelAttr.addMob(scarecrow);

    const scarecrow2 = new Scarecrow();
    scarecrow2.mob.character.pos = [21, 44];
    this.levelAttr.addMob(scarecrow2);

    const piranha1 = new Piranha();
    piranha1.mob.character.pos = [19, 9];
    this.levelAttr.addMob(piranha1);

    const piranha2 = new Piranha();
    piranha2.mob.character.pos = [42, 37];
    this.levelAttr.addMob(piranha2);

    const piranha3 = new Piranha();
    piranha3.mob.character.pos = [42, 36];
    this.levelAttr.addMob(piranha3);

  }

  getTextureName() {
    return "tiles_town";
  }
}