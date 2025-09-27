export {blockMap, npcMap, map_dolya_block, Block};

class Block {
  type;
  name;
  coor;
  isVisited;

  static FLOOR = 0;
  static WALL = 1;

  constructor({type, name, lightPass}) {
    this.type = type;
    this.name = name;
    this.isVisited = false;
    this.lightPass = !!lightPass;
  }
}


const blockMap = {
  "W": {name:"wall_ground", type: Block.WALL},
  "T": {name:"wall_deco", type: Block.FLOOR},
  "Z": {name:"high_grass", type: Block.FLOOR},
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
  // "water0": {name:"water0", type: Block.FLOOR, lightPass: true},
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
      yells: [
        "我该说欢迎吗，这是为2019春节专门准备的地图，但是就算是2022年，世界依然没有好转。",
        "椰子...它会处理之后的一切。作为一台机器，它很可爱，但它并不能缓解我的忙碌。",
        "2022春节...操蛋极了，我一天都没好好休息。现在就算不是春节这里也会持续开放。",
      ],
    },
  },
  shopkeeper: {
    name: "shopkeeper",
    animation: {
      idle: {
        frames: [1, 1, 1, 1, 1, 0, 0, 0, 0],
        hz: 10
      }
    },
    coor: [13, 10],
    text: {
      name: "黑市商人",
      description: "这家伙会出现在任何可以赚钱的地方。无论那里有多么危险。",
      yells: [
        "这家伙会出现在任何可以赚钱的地方。无论那里有多么危险。",
      ]
    }
  },
  shopkeeper2: {
    name: "shopkeeper",
    animation: {
      idle: {
        frames: [1, 1, 1, 1, 1, 0, 0, 0, 0],
        hz: 10
      }
    },
    coor: [8, 23],
    text: {
      name: "黑市商人",
      description: "这家伙会出现在任何可以赚钱的地方。无论那里有多么危险。",
      yells: [
        "这家伙会出现在任何可以赚钱的地方。无论那里有多么危险。",
      ]
    }
  },
  otiluke: {
    name: "otiluke",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
        hz: 10
      }
    },
    coor: [32, 15],
    text: {
      name: "Otiluke",
      description: "Otiluke，一位极具天赋的巫师。 他做了许多事情。其中之一就是带走了Amulet护符。",
      yells: [
        "我们终于相见了，同时我重新看到了热闹的家乡，就和我小时候一样。",
        "我十分感谢你的所作所为。我会把你引荐到高塔的。",
        "好吧，我知道你要什么。Amulet护符现在被封印在高塔里面，没法拿出来了。但是我可以给你一个仿制品，它和Amulet护符功能一样。",
      ],
    }
  },
  udawos: {
    name: "udawos",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [33, 34],
    text: {
      name: "Udawos",
      description: "先锋的制作者。先锋是以像素地牢的源代码制作的。",
      yells: [
        "我的新游戏叫做chernog：FOMTMA。你可以在网上下载这个游戏。",
        "先锋不同于传统地牢游戏，它是一个rpg游戏，和塞尔达传说1类似。",
      ]
    }
  },
  typedscroll: {
    name: "typedscroll",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [9, 23],
    text: {
      name: "TypedScroll",
      description: "LCPD的制作者。虽然他的确有不错的编程能力，但是他的没有仔细考虑程序总会有许多bug。",
      yells: [
        "嘿，为什么我长成这样，为什么和我说话，我不知道该和你说什么。",
        "LCPD的制作者。虽然他的确有不错的编程能力，但是他的没有仔细考虑程序总会有许多bug。",
      ]
    }
  },
  g2159687: {
    name: "g2159687",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [35, 3],
    text: {
      name: "G2159687",
      description: "简单发芽的作者及汉化者，国人，现在处于弃坑状态。",
      yells: [
        "我是G2159687，喜欢我的简单发芽吗?我可没有其他台词。",
        "我想应该有一些玩家会认为地牢类游戏比较难，所以我弄了几个简单版本。",
      ]
    }
  },
  consideredhamster: {
    name: "consideredhamster",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [26, 10],
    text: {
      name: "ConsideredHamster的宝箱怪",
      description: "YAPD的作者的宠物。恕我直言，打不通YAPD简单难度的都是垃圾。",
      yells: [
        "嘿，我现在很饿，能给我喂1美刀吗?",
        "Pineapples!",
      ]
    }
  },
  bilboldev: {
    name: "bilboldev",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [24, 10],
    text: {
      name: "Bilboldev",
      description: "技巧地牢的制作者。他人非常好，因为据说他曾帮助typedscroll修复bug。",
      yells: [
        "对我的技巧地牢多点耐心，伙计xD。",
        "我计划未来对技能系统和故事系统做一次巨大的更新。",
        "Hatsune的牺牲会被人所铭记!",
      ]
    }
  },
  xixizero: {
    name: "xixizero",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [25, 11],
    text: {
      name: "西西0.12",
      description: "黑暗地牢的制作者。",
      yells: [
        "你好啊，我是黑暗地牢的制作者。你也可以叫我Egoal。",
      ]
    }
  },
  watabou: {
    name: "watabou",
    animation: {
      idle: {
        frames: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        hz: 15
      }
    },
    coor: [42, 42],
    text: {
      name: "Watabou",
      description: "像素地牢的创造者。",
      yells: [
        "为什么不试试我的其他游戏呢?",
        "像素地牢现在停止更新了......",
      ]
    }
  },
  whiteghost: {
    name: "whiteghost",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [45, 44],
    text: {
      name: "白幽妹",
      description: "由于高塔的实验，她已经失去了原有的形体。",
      yells: [
        "我很高兴还有人记得我。",
      ]
    }
  },
  millilitre: {
    name: "millilitre",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [45, 42],
    text: {
      name: "millilitre isaac",
      description: "因为意外来到这里的测试者之一，他被吓得不轻。",
      yells: [
        "不要管我，让我静静。",
        "这个世界太可怕了...妈妈...我想回家...",
      ]
    }
  },
  nyrds: {
    name: "nyrds",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15
      }
    },
    coor: [13, 11],
    text: {
      name: "Nyrdie",
      description: "混合地牢的制作者???一个带墨镜的白牙肌肉块。",
      yells: [
        "嘿，我是nyrdie",
        "美牙建议:不要忘了每天早上刷牙哦!",
      ]
    }
  },
  hbb: {
    name: "hbb",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [43, 15],
    text: {
      name: "工会主席-巨无霸卡比",
      description: "破碎地牢的翻译者之一，同时也是像素地牢吧的吧主，小马的爱好者。",
      yells: [
        "The-world's-still-the-same, there's-just...less-in-it.",
        "Friendship-is-magic!",
        "I-am-a-magical-princess-from-another-dimension.",
      ]
    }
  },
  sfb: {
    name: "sfb",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [33, 11],
    text: {
      name: "流浪法师-破碎暴风火杖",
      description: "破碎地牢的翻译者之一。",
      yells: [
        "打牌吗，跑团吗，带我一个带我一个。",
        "火属性是最具有破坏力的属性。它的输出也是最高的",
      ]
    }
  },
  flyling: {
    name: "flyling",
    animation: {
      idle: {
        frames: [0, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [37, 12],
    text: {
      name: "澪",
      description: "谁也不知道她从何处来，她偶尔会去雪景旅馆休息。\n\n如果你遇到她了，不妨试试和她搭讪看看吧。",
      yells: [
        "嗯？你好啊。欢迎你来到这里，我是澪。",
        "你会获得救赎吗？愿世界祝福你……",
        "你问我是谁？谁知道呢，但我偶尔会来这里休息，并在这里祝福每一个冒险者。",
      ]
    }
  },
  omicronrg9: {
    name: "omicronrg9",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [36, 11],
    text: {
      name: "Ømicrónrg9",
      description: "这个看上去像十字军战士的长发男子，是一个研究平行世界的学者。他正在收集这个世界的信息的时候受到了来自高塔的邀请，在蜜蜂罐罐的引导下来的这个世界，并和这个世界的其他人分享关于其他世界的信息。由于看上去有些失眠，所以他可能有攻击性。",
      yells: [
        "别挡道，伙计!我可没时间弄些杂七杂八的事情，mod表可是不会自己生成的。",
        "食人鱼这种这种生物是在是太棒了，它们能轻易撕碎各种动物，特别是没有外壳的。",
        "你知道吗，在所有像素地牢的衍生mod中，超过24种是以p字母打头的。",
        "为了更好地寻找和收集mod，我把我的一只眼睛换成了钛合金电子眼。这很酷，也很值得。",
        "希望这东西...无论在哪，依然是个幻象。",
        "这个世界包容了超过9个不同世界的不同产物，真出乎我的意料!",
      ]
    }
  },
  honeypoooot: {
    name: "honeypoooot",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        hz: 3
      }
    },
    coor: [40, 15],
    text: {
      name: "蜜蜂罐罐",
      description: "一个老练的冒险者，是工会主席的助手，负责帮忙处理各种工会任务，包括各类新道具的测试。",
      yells: [
        "看见那边的那只黑猫了吗，它是我的头儿。",
        "这件蜂蜜袍子很好看?拜托这是兜帽唉。",
      ],
    }
  },
  jinkeloid: {
    name: "jinkeloid",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [43, 14],
    text: {
      name: "公会会长Jinkeloid",
      description: "这是mispd作者所创建的镜像。mispd作者同时也是破碎地牢的中文审核者。",
      yells: [
        "现在工会不对外营业，当然欢迎你们前来参观。",
        "你知道冰冻效果吗，它能控制住目标并使其受到更多的伤害。",
        "听说你完成了所有挑战目标，那么这个你有资格前往这个地方。",
      ]
    }
  },
  atv9: {
    name: "atv9",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 10
      }
    },
    coor: [43, 17],
    text: {
      name: "AekaTsrnVeskyinja999",
      description: "这个是9，也可以称之为9[带圈的那个9] 参与绘制明日方舟地牢。彻头彻尾的酒鬼。",
      yells: [
        "喵喵喵",
        "蜂蜜罐罐是我妈！",
        "如果你觉得这个绘制在哪里看过请想办法与我联系",
      ]
    }
  },
  uncles: {
    name: "uncles",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [43, 22],
    text: {
      name: "斯堡罗提德大叔",
      description: "工会里的力士，是个猛男。",
      yells: [
        "小子，想和我锻炼一下吗",
      ]
    }
  },
  realman: {
    name: "realman",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [44, 45],
    text: {
      name: "炼金矮人",
      description: "工会中的一个奇特的存在，擅长炼金术和收藏独立游戏。",
      yells: [
        "工会中的一个奇特的存在，擅长炼金术和收藏独立游戏。",
      ]
    }
  },
  lyn: {
    name: "lyn",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [40, 22],
    text: {
      name: "受咒ankh",
      description: "破碎地牢的翻译者之一，是个脚男。",
      yells: [
        "燃烧!净化!为了萨格拉斯的伟大远征!",
        "来杯魔能饮料吗?哦，你想知道宠物吃什么吗?想想它们是什么，是常规生物还是奇幻事物，是素食还是肉食。当然，没有宠物可以拒绝口粮，那是特制的。",
      ]
    }
  },
  saidbysun: {
    name: "saidbysun",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [42, 45],
    text: {
      name: "阳说",
      description: "一只猫，用不安的眼神盯着旁边的炼金设备。没准那里有它讨厌的食物。",
      yells: [
        "我想下一步应该这么做...等等，我搞错了...",
        "他们叫我帮忙测试，我就来这儿了...哦我什么都没说...",
      ]
    }
  },
  sp931: {
    name: "sp931",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3
      }
    },
    coor: [40, 16],
    text: {
      name: "被放逐者-931451545",
      description: "破碎地牢的翻译者之一。虽然我对他了解不多，但是目前他人对他的评价呈两级分化状态。",
      yells: [
        "嘿，还在看空洞无聊的文本贴图吗，来试试我的蓝猫地牢吧。",
        "人生如果不装B的话还有什么意思呢?",
      ]
    }
  },
  dreamplayer: {
    name: "dreamplayer",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [43, 24],
    text: {
      name: "小萌新大梦想",
      description: "一团七彩元素，是一个测试产物。",
      yells: [
        "要比比看，谁更滑稽吗?",
        "圆润地滑稽走。",
      ]
    }
  },
  lery: {
    name: "lery",
    animation: {
      idle: {
        frames: [0, 1, 2],
        hz: 10
      }
    },
    coor: [41, 9],
    text: {
      name: "驯兽师-论坛修齐",
      description: "破碎地牢的翻译者之一，同时也是最早期像素地牢更新日志的翻译者之一。",
      yells: [
        "你足够冷酷吗?",
        "我这里出售各种蛋。如果你是一个出色的训练家的话，你也可以训练出像我那么强大的怪物的。",
      ]
    }
  },
  blackmeow: {
    name: "blackmeow",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15,
      }
    },
    coor: [38, 38],
    text: {
      name: "黑喵",
      description: "黑喵地牢的领袖",
      yells: [
        "哦！你好冒险者，你看上去身手不凡，不知道你有没有兴趣到我的领土上去做做客？",
        "嗯…我的意思是说我的领土上也有一个地牢听说里面也有一个护符，不过里面十分危险你可能会受伤。你可以帮我带上来吗，我可以给你很多财富！",
      ]
    }
  },
  catsheep: {
    name: "catsheep",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15,
      }
    },
    coor: [37, 37],
    text: {
      name: "彩虹猫",
      description: "彩虹猫",
      yells: [
        "喵",
      ]
    }
  },
  evan: {
    name: "evan",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3],
        hz: 15,
      }
    },
    coor: [27, 31],
    text: {
      name: "Evan",
      description: "破碎地牢的制作者。说实在的我无法确定这代表evan还是破碎...他们的图标是一样的。",
      yells: [
        "欢迎，冒险者。这个地牢可不太平呢。-来自00-Evan",
        "我比较低调，所以当我听到hmdzl001和我说要我考虑台词的时候，其实我是拒绝的。",
        "我需要尽我全力来使破碎地牢更加好玩，更加有趣，更加合理，更加有挑战性。",
      ]
    }
  },
  ice13: {
    name: "ice13",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15,
      }
    },
    coor: [29, 32],
    text: {
      name: "佣兵-寒雾十三",
      description: "一个看上去有点神经质的术士，他依靠着一张损坏的多利亚小镇的地图和蜂蜜罐罐的指引来到了这里，他待在这里的目的是为了让这里更加——按他的说法——混乱。",
      yells: [
        "这个世界依旧存在一些差错，但它至少不会搞出一只黑色的野兽。",
        "你好，我叫寒雾十三，是一位普普通通的佣兵，如果我没记错的话，我们不是第一次见面，对吧？",
        "我的配色很奇怪吗？呵，这只是三原色而已。",
        "记住，拥抱过去，创造未来。",
        "为这个世界的造物主——坚果欢呼吧，坚果是至高无上的神!",
        "元素没有正邪之分，但它的使用者有。",
      ]
    }
  },
  fruitcat: {
    name: "fruitcat",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [45, 2],
    text: {
      name: "工会荣誉商人-菜猫",
      description: "这是一个很可爱的玩家。",
      yells: [
        "自从椰子走后，这家店就由我来管理。放心好了，我可不会涨价。",
        "信不信由你，在椰子离开之前，他没有带任何东西，只是把它们堆起来让它们吔尘！无论如何，你可能比我更需要它们。",
      ]
    }
  },
  locastan: {
    name: "locastan",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [5, 5],
    text: {
      name: "Locastan",
      description: "哥布林地牢的制作者。他相当喜欢哥布林这部漫画。神灯是释放地牢的标志。",
      yells: [
        "这个门被锁住了...这个房间肯定不止一个门...没准我可以打开它...",
        "嘿，这可不是什么废铁，这是一件非常有用的工具。",
        "只要我能释放这个神灯的力量，我的世界就会更加精彩纷呈。",
      ]
    }
  },
  goblinplayer: {
    name: "goblinplayer",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [2, 5],
    text: {
      name: "神盾哥布林",
      description: "一个参加测试的哥布林，他手里拿着一块炫彩盾牌。",
      yells: [
        "这个世界蛮不错，但比起哥布林族的试炼来说还是太简单了。",
        "看见这块盾牌了吗，这是神盾。我们教派的支柱。",
      ]
    }
  },
  dachhack: {
    name: "dachhack",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [37, 3],
    text: {
      name: "Dachhack",
      description: "发芽地牢的作者。上面那个光环是代表自然之神地牢。",
      yells: [
        "对发芽地牢的崩溃我表示抱歉，目前我在尝试修复他们。",
        "我不明白为什么hmdzl001这个家伙会把我设计成这样...下面那是什么玩意...",
        "最新的发芽你可以在我的谷歌硬盘上找到，虽然还是预览版，但是基本框架我是已经弄好了的。",
      ]
    }
  },
  memoryofsand: {
    name: "memoryofsand",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3
      }
    },
    coor: [26, 4],
    text: {
      name: "义往尘沙",
      description: "这是一个对发芽改有重大贡献的玩家。",
      yells: [
        "嗨，酒馆现在开放了。随便选个食物尝尝吧。",
        "原来我也是个冒险者，直到我试了试发芽改...",
      ]
    }
  },
  afly: {
    name: "afly",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15
      }
    },
    coor: [27, 17],
    text: {
      name: "阿飞，阿比和阿比斯",
      description: "不思议地牢的制作者",
      yells: [
        "你好啊，我是阿飞，旁边两个分别是阿比和阿比斯。",
      ],
    }
  },
  piranha: {
    name: "piranha",
    animation: {
      idle: {
        frames: [0, 1, 2, 1],
        hz: 8
      }
    },
    coor: [19, 9],
    text: {
      name: "原生肉食鱼",
      description: "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      yells: [
        "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      ]
    }
  },
  bonestar: {
    name: "bonestar",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 10
      }
    },
    coor: [21, 9],
    text: {
      name: "星辰",
      description: "星辰地牢的开发者，不过因为开源包问题已经弃坑。这个家伙简直就是全副武装，然而他却没有打算探索地牢的冲动，真是可惜了这身装备。然而有趣的是，当人们询问他关于这个地牢的故事时，他们只得到了一个回复“我已经通关了”，然而没有任何人见过他除了站在那里还有什么其他的动作。除了对在他面前停留已久的冒险者一个白眼除外……不过值得一提的是，星辰对人还算不错。每当有新的冒险者来交谈的时候，他总会从背包里摸出两块石头给你，当然，两个石子的可能性也并不是没有……看起来从前的他是个热情的冒险者，然而现在的他只想和远道而来的冒险者们唠唠家常话，消磨一下时光，这就够了。",
      yells: [
        "嘿，又来了一个新家伙！看起来你准备的非常充分，祝你一路顺风！",
      ]
    }
  },
  ahorse: {
    name: "ahorse",
    animation: {
      idle: {
        frames: [0, 1, 2, 3],
        hz: 10
      }
    },
    coor: [28, 6],
    text: {
      name: "A神马",
      description: "看，他在变色",
      yells: [
        "再来杯果汁!",
      ]
    }
  },
  oldnewstwist: {
    name: "oldnewstwist",
    animation: {
      idle: {
        frames: [0, 0, 0, 1],
        hz: 2,
      }
    },
    coor: [20, 3],
    text: {
      name: "Oldnewstwist",
      description: "一个豺狼流浪者，看来豺狼一族里面也是有纷争的。",
      yells: [
        "我试图在我所在的部落宣扬和平，虽然有些居民支持我，但是掌权者却把我赶出了部落，还剃光了我的体毛。",
        "啊!别伤害我，我和那群邪恶的豺狼人不一样。",
        "我对你非常感谢。你的强大，善良，智慧，令我钦佩。",
        "哦，我这里卖各种特殊武器。它们来自于其他时间。",
      ]
    }
  },
  hatesokoban: {
    name: "hatesokoban",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [23, 10],
    text: {
      name: "讨厌的羊关",
      description: "这是一个对发芽改有贡献的玩家，同时也是小马的爱好者。",
      yells: [
        "明白这是个游戏对吧，对吧。我需要完整的中文版发芽改，而不是这个半成品。",
        "关于招羊法杖，虽然绝大部分时候没什么用，但是它能很好解决推箱关的难题。",
      ]
    }
  },
  laji: {
    name: "laji",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [23, 12],
    text: {
      name: "原罪学者-司徒",
      description: "这是一个祭师，同时也是小镇的维修者。",
      yells: [
        "这位客人，能不能让我耽误你一点时间讲一讲我们的天父克苏鲁。",
        "梦与白昼者所知晓之诸多事物常为梦于黑夜者所忘却。",
        "另外...维护这个小镇很累的......",
      ]
    }
  },
  stormandrain: {
    name: "stormandrain",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [21, 6],
    text: {
      name: "雷雨交加",
      description: "这是一个对发芽改有重大贡献的玩家。",
      yells: [
        "嗨，需要买些密宝吗。这些可是高级货。",
        "严格意义上我并不属于人类...但没人规定只有人类才能当财宝猎人。",
      ]
    }
  },
  ravenwolf: {
    name: "ravenwolf",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [23, 6],
    text: {
      name: "ravenwolf",
      description: "无名地牢的作者",
      yells: [
        "......",
      ]
    }
  },
  lynn: {
    name: "lynn",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [31, 32],
    text: {
      name: "符文学者-莲恩",
      description: "十分出色的符文研究者，对各种派系的魔法都有研究。其中最为出色的研究就是多利亚出产的魔法石。",
      yells: [
        "我已经修好了这个合成台，现在你应该可以使用魔法石合成武器了。",
        "我的下一个研究目标应该是什么呢?",
        "这不是你该有的东西~~~",
      ]
    }
  },
  ren: {
    name: "ren",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15,
      }
    },
    coor: [28, 27],
    text: {
      name: "穿越者REN",
      description: "REN是最早使用了穿梭法术而闻名的“玩家”，据说他拿到过超过140枚Yendor护符并且分别来自不同的世界中。\n\n同时，REN也是多个地牢的创造者，虽然他现在似乎正在醉心于制作有很多美少女的地牢的样子……最好还是不要问他以前有关于“鸟船”的问题。",
      yells: [
        "有关“鸟船”，我不会再透露更多！",
        "我有枚Yendor找不到了！它应该就在附近。",
        "你不会想要带着这玩意的。",
        "感谢你完成了我留下的“日志”，虽然很不想清空老物件，但还是把这个给你吧。",
        "你好，我是REN，留下消息你应当看到了。我的“日志”可以复原并模拟这座地牢里传送的魔力，填满它，我会给你一件来自其他地牢的宝物。",
        "我曾打造过一座充满了威士忌的地牢……听起来很浪漫不是吗？",
      ]
    }
  },
  kostis12345: {
    name: "kostis12345",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [20, 25],
    text: {
      name: "秘书kostis12345",
      description: "小镇的秘书，负责小镇宣传以及其他杂物。偶尔高层也会让她出去考察实习。",
      yells: [
        "你看见过我们的镇长了吗?我们还有许多事情要做。",
        "如果你对这一切有疑问的话，你可以在pixeldungeon.wikia.com寻找SpeciaSurprisePixelDungeon.还等什么，赶紧上船吧!",
      ]
    }
  },
  apostle: {
    name: "apostle",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [20, 21],
    text: {
      name: "apostle",
      description: "一个闪着光芒的立方体，发声机械而又有磁性，可能是其他世界的测试者。",
      yells: [
        "只有，魔法，才能，战胜，魔法。",
        "魔法，战胜，才能，魔法，只有。",
        "看来你通过了这轮测试。和其他测试者聊聊吧，没准能得到什么。",
      ]
    }
  },
  nutpainter: {
    name: "nutpainter",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 15,
      }
    },
    coor: [16, 21],
    text: {
      name: "坚果教教主",
      description: "一个测试画家，十分喜欢画坚果。",
      yells: [
        "坚果nb!!!",
        "坚果万岁!!",
      ]
    }
  },
  juh9870: {
    name: "juh9870",
    animation: {
      reverseTexture: true,
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [35, 6],
    text: {
      name: "Juh9870",
      description: "月光地牢的制作者。",
      yells: [
        "我记得我的祖父曾在月光下对我说过，严禁空想，脚踏实地。",
        "所以...我希望我能在这找到更多有意义的东西。",
      ]
    }
  },
  sadsaltan: {
    name: "sadsaltan",
    animation: {
      reverseTexture: true,
      idle: {
        frames: [0, 0, 0, 1, 0, 0, 1, 1],
        hz: 1,
      }
    },
    coor: [42, 38],
    text: {
      name: "SadSaltan",
      description: "月光地牢的绘图者。标识有“月光”的名牌挂在他的胸前。",
      yells: [
        "哦，难得一见的新的探险者。人们来这里就是为了寻找财宝的，没有富人会无聊到来这个地方。",
        "我在其他地方开设着一个酒吧，我是过来宣传它的。想找到那里十分容易，只要对卫兵说“月光”他就会为你带路。",
        "收下我的名片，以后你到那里的时候没准我可以请你喝一杯。",
      ]
    }
  },
  noodlemire: {
    name: "noodlemire",
    animation: {
      reverseTexture: true,
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [31, 20],
    text: {
      name: "镇长Noodlemire",
      description: "小镇的镇长，著有chancel一书。因为经济萧条所以工作十分轻松。",
      yells: [
        "哦，欢迎来到这个小镇。容我介绍一下，我是这个小镇的镇长。这里以前还是一个著名景点，但现在就完全不行了。",
        "东边的那幢屋子是一个私人工会，东南方是鱼塘和墓地，西南方是矿洞遗址，西方是武器商店，西北方是杂货店，西方是酒馆，东北方是一间在建旅馆，正中心是教堂。如果你想问居民睡哪里的话，我只能说无可奉告。",
      ],
    }
  },
  shower: {
    name: "shower",
    animation: {
      idle: {
        frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        hz: 3,
      }
    },
    coor: [30, 19],
    text: {
      name: "shower",
      description: "指虎教派的成员之一，来这里测试新的指虎武器。",
      yells: [
        "初次见面，我是shower。你也可以叫我沐沐。虽然两个叫法都行，但是叫我沐沐我会更开心的。",
        "看到东边的池塘了吗?我想你可以在那洗澡...前提在那养鱼之前。",
        "这是个很棒的小镇，有很多很好的人，我想我会在这玩上一段时间。没准会碰上熟人呢。",
      ],
    }

  },
  xavier251998: {
    name: "xavier251998",
    animation: {
      idle: {
        frames: [0, 1],
        hz: 1,
      }
    },
    coor: [14, 33],
    text: {
      name: "地质勘探员Xavier251998",
      description: "一名勘探小镇地质的家伙，他人很好。",
      yells: [
        "我正在做一个课题，研究地壳变动和人为开矿的关系。可惜的是矿洞遗址里面有条龙再那，我没法进入矿洞查看。",
        "据说小镇曾经有过辉煌的时候，大量的魔法矿石出口并给小镇带来可观的收入。但这一切已经结束了。",
        "你该不会饿了吧，拿上这块肉，伙计。",
      ]
    }
  },
  adultdragonviolet: {
    name: "adultdragonviolet",
    animation: {
      idle: {
        frames: [0, 1, 0, 1, 0, 1, 0],
        hz: 10,
      }
    },
    coor: [5, 43],
    text: {
      name: "守卫巨龙",
      description: "守卫巨龙通常是被召唤而来，但是对普通人来说它和野生巨龙没什么两样。",
      yells: [
        "离这远点!入侵者!",
        "为了...Otiluke大人!!",
      ]
    }
  },
  scarecrow: {
    name: "scarecrow",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [18, 44],
    text: {
      name: "稻草人",
      description: "试试看，你能打多少伤害。",
      yells: [
        "试试看，你能打多少伤害。",
      ]
    }
  },
  raintrainer: {
    name: "raintrainer",
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [17, 42],
    text: {
      name: "训练家Rain",
      description: "这是一个早期的计划npc，但是他并没有加入到游戏中。现在，他准备好了。",
      yells: [
        "训练家只要眼神对上了就要战...抱歉说错了。",
        "你可以用那个稻草人练手,不用担心,它很结实。",
      ]
    }
  },
  rustyblade: {
    name: "rustyblade",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 315,
      }
    },
    coor: [22, 42],
    text: {
      name: "战斗大师-无聊",
      description: "混合地牢的翻译者之一，同时也是破碎地牢翻译的协助者。",
      yells: [
        "嗨，我是无聊，为什么我在这儿。",
        "攻击提升，攻击下降，防御提升，防御下降，你见过这些buff吗?",
      ]
    }
  },
  tempest102: {
    name: "tempest102",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [33, 42],
    text: {
      name: "音乐家tempest102",
      description: "破碎地牢的翻译者之一，同时也是搞音乐的。",
      yells: [
        "原来我只搭了个帐篷，但现在我有了自己的商店。",
        "欢迎光临我的乐器工作室。想买点什么吗?",
      ]
    }
  },
  scarecrow2: {
    name: "scarecrow", 
    animation: {
      idle: {
        frames: [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3],
        hz: 3,
      }
    },
    coor: [21, 44],
    text: {
      name: "发条稻草人",
      description: "这个稻草人很危险，千万不要触动它。",
      yells: [
        "这个稻草人很危险，千万不要触动它。",
      ]
    }
  },
  piranha2: {
    name: "piranha",
    coor: [42, 37],
    animation: {
      idle: {
        frames: [0, 1, 2, 1],
        hz: 8
      }
    },
    text: {
      name: "原生肉食鱼",
      description: "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      yells: [
        "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      ]
    }
  },
  piranha3: {
    name: "piranha",
    coor: [42, 36],
    animation: {
      idle: {
        frames: [0, 1, 2, 1],
        hz: 8
      }
    },
    text: {
      name: "原生肉食鱼",
      description: "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      yells: [
        "在这种地方生活的肉食鱼经过上百年的演变，它们的视觉早已退化。不过它们的其他感官异常灵敏，可以感受到周围水流的变化，也异常凶猛。",
      ]
    }
  },
  ashwolf: {
    name: "ashwolf",
    animation: {
      idle: {
        frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3],
        hz: 10,
      }
    },
    coor: [40, 36],
    text: {
      name: "阿萨男爵",
      description: "地牢游戏和像素画爱好者，RM制作者，兽控，正在制作异域冒险传。",
      yells: [
        "看，我给你种个宝贝。",
        "16*16的范围里也可以做出很萌的家伙，另外，为什么豺狼人不能成为伙伴呢？！",
        "万圣节强制彩蛋，南瓜灯换糖!!!",
        "看看新的房屋，转换一下心态。"
      ]
    }
  },
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


// const tempAnimationDone = ["shopkeeper2", "shopkeeper", "xixizero", "typedscroll", "whiteghost", "realman", "udawos", "oldnewstwist", "lery", "xavier251998", "bonestar", "locastan", "dachhack", "sfb", "fruitcat", "piranha2", "piranha3", "piranha", "scarecrow", "scarecrow2", "ravenwolf", "adultdragonviolet", "rustyblade", "memoryofsand", "tempest102", "ashwolf", "saidbysun", "uncles", "atv9", "raintrainer", "sadsaltan", "stormandrain", "consideredhamster", "lynn", "jinkeloid", "hbb", "blackmeow", "ice13", "juh9870", "watabou", "laji", "catsheep", "goblinplayer", "hatesokoban", "evan", "hmdzl001", "otiluke", "afly", "shower", "ren", "apostle", "noodlemire", "nutpainter", "kostis12345", "g2159687", "dreamplayer", "bilboldev", "ahorse", "honeypoooot", "sp931", "nyrds", "millilitre"];
// const tempTextDone = ["lery", "shopkeeper2", "shopkeeper", "xixizero", "realman", "typedscroll", "whiteghost", "udawos", "uncles", "oldnewstwist", "xavier251998", "bonestar", "locastan", "dachhack", "sfb", "fruitcat", "piranha", "piranha2", "piranha3", "scarecrow", "scarecrow2", "ravenwolf", "rustyblade", "adultdragonviolet", "tempest102", "memoryofsand", "ashwolf", "raintrainer", "saidbysun", "atv9", "lynn", "jinkeloid", "sadsaltan", "stormandrain", "consideredhamster", "hbb", "blackmeow", "ice13", "juh9870", "watabou", "laji", "catsheep", "goblinplayer", "hatesokoban", "evan", "bilboldev", "g2159687", "millilitre", "dreamplayer", "sp931", "kostis12345", "nutpainter", "hmdzl001", "afly", "shower", "otiluke", "noodlemire", "ahorse", "honeypoooot", "ren", "apostle", "nyrds"]

const map_dolya_block = [["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","O","O","O","M"],["M","M","M","M","E","M","T","M","M","M","M","M","E","E","M","M","M","M","M","R","R","R","A","W","W","W","W","W","W","E","E","W","W","W","W","W","W","W","W","M","M","M","M","M","O","E","O","M"],["M","M","M","E","E","E","W","S","W","W","W","E","E","E","E","E","E","E","T","C","E","E","E","W","O","O","O","O","W","E","E","J","O","O","G","O","O","O","W","W","W","W","W","W","O","O","O","M"],["M","M","O","E","E","E","L","O","O","O","W","E","E","E","E","E","E","E","T","E","E","E","E","W","O","O","O","O","W","E","E","W","O","O","G","G","G","O","W","O","O","O","O","W","M","M","D","M"],["M","M","O","E","T","E","J","O","O","O","W","E","E","E","E","E","E","E","T","W","W","S","W","W","O","G","G","G","W","E","E","D","O","O","O","O","O","O","L","O","O","O","H","W","M","M","E","M"],["M","M","O","E","E","E","W","W","W","W","W","W","W","W","W","W","E","E","E","W","O","O","O","O","O","O","O","O","E","E","E","W","O","O","O","O","O","W","W","W","W","J","W","W","M","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","O","O","O","O","W","E","E","E","W","O","O","O","O","O","O","O","O","E","E","E","W","O","O","O","O","O","W","O","O","W","R","R","R","M","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","G","G","O","W","E","E","W","W","J","O","O","O","O","O","O","O","E","E","E","W","W","P","P","O","O","D","O","H","J","R","R","R","R","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","O","O","O","W","E","E","W","R","J","O","O","O","O","O","O","O","E","E","E","E","W","O","O","O","O","W","O","O","W","R","R","R","R","M","E","M"],["M","M","M","E","E","E","W","O","O","O","O","G","O","O","O","J","E","E","W","R","J","O","O","O","O","O","O","O","W","E","E","E","W","W","D","W","D","W","W","W","W","R","R","R","U","T","E","M"],["M","M","M","M","E","E","W","W","W","D","W","W","O","O","O","W","E","E","W","W","J","O","O","O","O","O","O","O","W","E","E","E","W","O","O","W","O","O","O","J","E","E","R","R","R","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","W","O","O","O","O","O","O","O","O","W","E","E","E","J","O","O","W","O","O","O","W","E","E","E","R","R","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","W","E","E","E","W","W","Y","O","O","W","E","E","E","W","O","H","W","O","H","O","W","W","W","D","W","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","W","W","W","W","J","W","W","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","P","P","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","W","O","O","O","O","W","M","M","M"],["M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","D","O","O","O","O","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","W","O","O","O","O","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","W","W","W","W","J","W","W","W","E","E","E","E","O","O","O","O","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","M","M","M"],["M","M","M","W","O","O","G","O","O","O","O","W","E","E","E","E","O","R","R","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","O","R","U","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","G","G","G","G","G","W","E","E","E","E","O","R","R","R","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","O","O","O","O","O","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","J","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","O","U","W","W","W","W","W","E","E","E","E","W","O","O","O","O","W","M","M","M"],["M","M","M","W","O","O","O","O","O","O","O","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","O","O","O","W","B","B","B","W","E","E","E","E","W","O","O","O","X","W","M","M","M"],["M","M","M","W","W","W","W","W","D","W","W","W","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","O","U","W","O","O","O","W","E","E","E","E","W","W","D","W","W","W","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","W","W","W","O","O","O","W","W","E","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","W","W","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","B","W","E","E","E","E","E","E","E","E","M","M","M"],["M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","D","O","O","O","O","O","O","O","O","O","O","P","O","B","W","E","E","E","E","O","O","O","O","M","M","M"],["M","M","M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","B","W","E","E","E","E","O","R","R","R","M","M","M"],["M","M","M","M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","O","O","O","O","O","O","O","O","O","W","W","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","W","W","W","W","W","M","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","W","W","W","W","O","O","O","W","W","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","I","F","F","F","W","T","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","O","O","O","W","E","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","F","F","I","F","T","T","T","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","B","B","B","W","E","E","E","E","E","E","O","R","R","R","M","M","M"],["M","M","W","F","F","F","F","T","T","T","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","W","W","W","W","W","E","E","E","E","E","E","O","O","O","O","M","M","M"],["M","M","W","F","F","F","F","W","W","W","W","W","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","Z","Z","Z","Z","Z","Z","W","M","M","M"],["M","M","W","F","F","U","F","F","W","F","F","W","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","Z","Z","Z","Z","Z","Z","W","M","M","M"],["M","M","W","I","F","F","F","F","W","F","F","W","M","M","M","M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","U","E","U","E","E","Z","Z","Z","Z","Z","Z","W","W","W","M"],["M","M","W","F","F","F","F","I","F","F","F","S","T","T","T","T","M","I","I","I","I","I","I","E","E","E","E","E","E","E","E","E","G","O","O","O","G","E","Z","Z","Z","Z","W","S","W","Z","W","M"],["M","M","W","F","F","F","F","F","W","F","F","W","M","M","M","M","M","O","I","I","I","I","O","E","E","E","M","M","E","E","E","E","W","O","O","O","W","E","Z","Z","Z","Z","S","Z","Z","Z","W","M"],["M","M","W","F","F","F","F","F","W","F","I","W","M","M","M","M","M","O","I","I","I","I","O","E","E","M","M","M","M","M","E","E","W","O","O","O","W","W","W","W","W","W","W","Z","O","O","W","M"],["M","M","W","W","W","W","W","W","W","W","W","W","M","M","M","M","M","O","O","O","O","O","O","E","M","M","M","M","M","M","M","M","W","W","W","W","W","M","M","M","M","W","Z","Z","O","O","W","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","W","W","W","W","W","W","M"],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]];