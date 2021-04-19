export const HERO = {
  IDLE: {
    picturePos: [63, 39],
    frameSize: [170, 96],
    pictureSize: [35, 35],
    speed: 16,
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  WALK: {
    picturePos: [66, 41],
    frameSize: [170, 96],
    pictureSize: [35, 35],
    speed: 8,
    frames: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  ATTACK_CLOSE: {
    picturePos: [56, 30],
    frameSize: [170, 96],
    pictureSize: [80, 50],
    speed: 30,
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  },
};

export const ENEMY_ARCHER = {
  IDLE: {
    picturePos: [53, 36],
    frameSize: [128, 128],
    pictureSize: [25, 40],
    speed: 8,
    frames: [0, 1, 2, 3, 4, 5, 6, 7],
  },
};
