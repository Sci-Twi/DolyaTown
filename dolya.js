const blockMap = {
  "W": {name:"wall_ground", type: Block.WALL},
  "T": {name:"shrub", type: Block.FLOOR, lightPass: true},
  "Z": {name:"high_grass", type: Block.FLOOR, lightPass: true},
  "D": {name:"door", type: Block.FLOOR},
  "L": {name:"locked_door", type: Block.WALL},
  "E": {name:"empty", type: Block.FLOOR, lightPass: true},
  "X": {name:"iron_maker", type: Block.FLOOR, lightPass: true},
  "M": {name:"wall_deco", type: Block.WALL},
  "P": {name:"pedestal", type: Block.FLOOR, lightPass: true},
  "F": {name:"empty_deco", type: Block.FLOOR, lightPass: true},
  "O": {name:"empty_sp", type: Block.FLOOR, lightPass: true},
  "A": {name:"well", type: Block.FLOOR, lightPass: true},
  "B": {name:"bookshelf", type: Block.WALL},
  "U": {name:"statue", type: Block.FLOOR, lightPass: true},
  "S": {name:"secret_door", type: Block.FLOOR, lightPass: true},
  "R": {name:"water", type: Block.FLOOR, lightPass: true},
  "Y": {name:"alchemy", type: Block.FLOOR, lightPass: true},
  "G": {name:"statue_sp", type: Block.FLOOR, lightPass: true},
  "C": {name:"tent", type: Block.FLOOR, lightPass: true},
  "H": {name:"bed", type: Block.FLOOR, lightPass: true},
  "I": {name:"embers", type: Block.FLOOR, lightPass: true},
  "J": {name:"glass_wall", type: Block.WALL, lightPass: true},
  "water0": {name:"water0", type: Block.FLOOR, lightPass: true},
};
const npcMap = {
  hmdzl001: {
    name: "hmdzl001",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 1, 1, 6, 6, 7, 7, 7, 1, 1, 0, 0, 0],
        hz: 10
      }
    },
    coor: [25, 21],
    text: {
      name: "hmdzl001",
      description: "特别坚果地牢的缔造者，同时也是一位玩家。",
      yells: [],
    },
  },
  "shopkeeper1": {name: "shopkeeper", frames: [], coor: [13, 10]},
  "shopkeeper2": {name: "shopkeeper", frames: [], coor: [8, 23]},
  otiluke: {
    name: "otiluke",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
        hz: 10
      }
    },
    coor: [32, 15]
  },
  "udawos": {name: "udawos", frames: [], coor: [33, 34]},
  "typedscroll": {name: "typedscroll", frames: [], coor: [9, 23]},
  g2159687: {
    name: "g2159687",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [35, 3]
  },
  "consideredhamster": {name: "consideredhamster", frames: [], coor: [26, 10]},
  bilboldev: {
    name: "bilboldev",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [24, 10]
  },
  "xixizero": {name: "xixizero", frames: [], coor: [25, 11]},
  "watabou": {name: "watabou", frames: [], coor: [42, 42]},
  "whiteghost": {name: "whiteghost", frames: [], coor: [45, 44]},
  millilitre: {
    name: "millilitre",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [45, 42]
  },
  nyrds: {
    name: "nyrds",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [13, 11]
  },
  "hbb": {name: "hbb", frames: [], coor: [43, 15]},
  "sfb": {name: "sfb", frames: [], coor: [33, 11]},
  "flyling": {name: "flyling", frames: [], coor: [37, 12]},
  "omicronrg9": {name: "omicronrg9", frames: [], coor: [36, 11]},
  honeypoooot: {
    name: "honeypoooot",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        hz: 3
      }
    },
    coor: [40, 15]
  },
  "jinkeloid": {name: "jinkeloid", frames: [], coor: [43, 14]},
  "atv9": {name: "atv9", frames: [], coor: [43, 17]},
  "uncles": {name: "uncles", frames: [], coor: [43, 22]},
  "realman": {name: "realman", frames: [], coor: [44, 45]},
  "lyn": {name: "lyn", frames: [], coor: [40, 22]},
  "saidbysun": {name: "saidbysun", frames: [], coor: [42, 45]},
  sp931: {
    name: "sp931",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [40, 16]
  },
  dreamplayer: {
    name: "dreamplayer",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [43, 24]
  },
  "lery": {name: "lery", frames: [], coor: [41, 9]},
  "blackmeow": {name: "blackmeow", frames: [], coor: [38, 38]},
  "catsheep": {name: "catsheep", frames: [], coor: [37, 37]},
  "evan": {name: "evan", frames: [], coor: [27, 31]},
  "ice13": {name: "ice13", frames: [], coor: [29, 32]},
  "fruitcat": {name: "fruitcat", frames: [], coor: [45, 2]},
  "locastan": {name: "locastan", frames: [], coor: [5, 5]},
  "goblinplayer": {name: "goblinplayer", frames: [], coor: [2, 5]},
  "dachhack": {name: "dachhack", frames: [], coor: [37, 3]},
  "memoryofsand": {name: "memoryofsand", frames: [], coor: [26, 4]},
  afly: {
    name: "afly",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [27, 17],
  },
  "piranha": {name: "piranha", frames: [], coor: [19, 9]},
  "bonestar": {name: "bonestar", frames: [], coor: [21, 9]},
  ahorse: {
    name: "ahorse",
    animation: {
      idle: {
        frames: [0, 1, 2, 3],
        hz: 10
      }
    },
    coor: [28, 6]
  },
  "oldnewstwist": {name: "oldnewstwist", frames: [], coor: [20, 3]},
  "hatesokoban": {name: "hatesokoban", frames: [], coor: [23, 10]},
  "laji": {name: "laji", frames: [], coor: [23, 12]},
  "stormandrain": {name: "stormandrain", frames: [], coor: [21, 6]},
  "ravenwolf": {name: "ravenwolf", frames: [], coor: [23, 6]},
  "lynn": {name: "lynn", frames: [], coor: [31, 32]},
  ren: {
    name: "ren",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15,
      }
    },
    coor: [28, 27]
  },
  kostis12345: {
    name: "kostis12345",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [20, 25]
  },
  apostle: {
    name: "apostle",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [20, 21]
  },
  nutpainter: {
    name: "nutpainter",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15,
      }
    },
    coor: [16, 21]
  },
  "juh9870": {name: "juh9870", frames: [], coor: [35, 6]},
  "sadsaltan": {name: "sadsaltan", frames: [], coor: [42, 38]},
  noodlemire: {
    name: "noodlemire",
    animation: {
      reverseTexture: true,
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [31, 20]
  },
  shower: {
    name: "shower",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        hz: 3,
      }
    },
    coor: [30, 19]
  },
  "xavier251998": {name: "xavier251998", frames: [], coor: [14, 33]},
  "adultdragonviolet": {name: "adultdragonviolet", frames: [], coor: [5, 43]},
  "scarecrow": {name: "scarecrow", frames: [], coor: [18, 44]},
  "raintrainer": {name: "raintrainer", frames: [], coor: [17, 42]},
  "rustyblade": {name: "rustyblade", frames: [], coor: [22, 42]},
  "tempest102": {name: "tempest102", frames: [], coor: [33, 42]},
  "scarecrow2": {name: "scarecrow", frames: [], coor: [21, 44]},
  "piranha2": {name: "piranha", frames: [], coor: [42, 37]},
  "piranha3": {name: "piranha", frames: [], coor: [42, 36]},
  "ashwolf": {name: "ashwolf", frames: [], coor: [40, 36]},
};
const textMap = {
  // hmdzl001: ["", ""],
};

// load texture
for (const block in blockMap) {
  const textureName = blockMap[block].name;
  const img = new Image();
  img.id = textureName;
  img.classList.add("texture");
  img.src = `images/block/${textureName}.png`;
  document.getElementById("back").appendChild(img);
}

for (const npc in npcMap) {
  const textureName = npcMap[npc].name;
  const img = new Image();
  img.id = textureName;
  img.classList.add("texture");
  img.src = `images/npc/${textureName}.png`;
  document.getElementById("back").appendChild(img);
}


const tempAnimationDone = ["hmdzl001", "otiluke", "afly", "shower", "ren", "apostle", "noodlemire", "nutpainter", "kostis12345", "g2159687", "dreamplayer", "bilboldev", "ahorse", "honeypoooot", "sp931", "nyrds", "millilitre"];
const tempTextDone = ["hmdzl001"]

const map_dolya_block = `[["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","O","O","O","M"],["M","M","M","M","E","M","T","M","M","M","M","M","E","E","M","M","M","M","M","R","R","R","A","W","W","W","W","W","W","E","E","W","W","W","W","W","W","W","W","M","M","M","M","M","O","E","O","M"],["M","M","M","E","E","E","W","S","W","W","W","E","E","E","E","E","E","E","T","C","E","E","E","W","O","O","O","O","W","E","E","J","O","O","G","O","O","O","W","W","W","W","W","W","O","O","O","M"],["M","M","O","E","E","E","L","O","O","O","W","E","E","E","E","E","E","E","T","E","E","E","E","W","O","O","O","O","W","E","E","W","O","O","G","G","G","O","W","O","O","O","O","W","M","M","D","M"],["M","M","O","E","T","E","J","O","O","O","W","E","E","E","E","E","E","E","T","W","W","S","W","W","O","G","G","G","W","E","E","D","O","O","O","O","O","O","L","O","O","O","H","W","M","M","E","M"],["M","M","O","E","E","E","W","W","W","W","W","W","W","W","W","W","E","E","E","W","O","O","O","O","O","O","O","O","E","E","E","W","O","O","O","O","O","W","W","W","W","J","W","W","M","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","O","O","O","O","W","E","E","E","W","O","O","O","O","O","O","O","O","E","E","E","W","O","O","O","O","O","W","O","O","W","R","R","R","M","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","G","G","O","W","E","E","W","W","J","O","O","O","O","O","O","O","E","E","E","W","W","P","P","O","O","D","O","H","J","R","R","R","R","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","O","O","O","W","E","E","W","R","J","O","O","O","O","O","O","O","E","E","E","E","W","O","O","O","O","W","O","O","W","R","R","R","R","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","O","O","O","J","E","E","W","R","J","O","O","O","O","O","O","O","W","E","E","E","W","W","D","W","D","W","W","W","W","R","R","R","U","T","E","M"],["M","M","M","M","E","E","W","W","W","D","W","W","O","O","O","W","E","E","W","W","J","O","O","O","O","O","O","O","W","E","E","E","W","O","O","W","O","O","O","J","E","E","R","R","R","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","W","O","O","O","O","O","O","O","O","W","E","E","E","J","O","O","W","O","O","O","W","E","E","E","R","R","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","W","E","E","E","W","W","Y","O","O","W","E","E","E","W","O","H","W","O","H","O","W","W","W","D","W","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","W","W","W","W","J","W","W","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","P","P","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","D","O","O","O","O","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","W","O","O","O","O","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","W","W","W","W","J","W","W","W","E","E","E","E","O","O","O","O","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","M","M","M"],["M","M","M","W","O","O","G","O","O","O","O","W","E","E","E","E","O","R","R","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","O","R","U","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","G","G","G","G","G","W","E","E","E","E","O","R","R","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","O","O","O","O","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","O","U","W","W","W","W","W","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","O","O","O","W","B","B","B","W","E","E","E","E","W","O","O","O","X","W","M","M","M"],["M","M","M","W","W","W","W","W","D","W","W","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","O","U","W","O","O","O","W","E","E","E","E","W","W","D","W","W","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","W","W","W","O","O","O","W","W","E","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","W","W","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","B","W","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","D","O","O","O","O","O","O","O","O","O","O","P","O","B","W","E","E","E","E","O","O","O","O","M","M","M"],["M","M","M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","B","W","E","E","E","E","O","R","R","R","M","M","M"],["M","M","M","M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","W","W","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","W","W","W","W","W","M","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","W","W","W","O","O","O","W","W","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","I","F","F","F","W","T","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","F","F","I","F","T","T","T","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","B","B","B","W","E","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","F","F","F","F","T","T","T","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","E","E","E","O","O","O","O","M","M","M"],["M","M","W","F","F","F","F","W","W","W","W","W","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","Z","Z","Z","Z","Z","Z","W","M","M","M"],["M","M","W","F","F","U","F","F","W","F","F","W","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","Z","Z","Z","Z","Z","Z","W","M","M","M"],["M","M","W","I","F","F","F","F","W","F","F","W","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","E","U","E","E","Z","Z","Z","Z","Z","Z","W","W","W","M"],["M","M","W","F","F","F","F","I","F","F","F","S","T","T","T","T","M","I","I","I","I","I","I","E","E","E","E","E","E","E","E","E","G","O","O","O","G","E","Z","Z","Z","Z","W","S","W","Z","W","M"],["M","M","W","F","F","F","F","F","W","F","F","W","M","M","M","M","M","O","I","I","I","I","O","E","E","E","M","M","E","E","E","E","W","O","O","O","W","E","Z","Z","Z","Z","S","Z","Z","Z","W","M"],["M","M","W","F","F","F","F","F","W","F","I","W","M","M","M","M","M","O","I","I","I","I","O","E","E","M","M","M","M","M","E","E","W","O","O","O","W","W","W","W","W","W","W","Z","O","O","W","M"],["M","M","W","W","W","W","W","W","W","W","W","W","M","M","M","M","M","O","O","O","O","O","O","E","M","M","M","M","M","M","M","M","W","W","W","W","W","M","M","M","M","W","Z","Z","O","O","W","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","W","W","W","W","W","W","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]]`;