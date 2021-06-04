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
  DEATH: {
    picturePos: [63, 41],
    frameSize: [170, 96],
    pictureSize: [35, 35],
    speed: 20,
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39],
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
  ATTACK: {
    picturePos: [180, 37],
    frameSize: [180, 128],
    pictureSize: [180, 40],
    speed: 14,
    frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  DEATH: {
    picturePos: [53, 36],
    frameSize: [128, 128],
    pictureSize: [25, 40],
    speed: 12,
    frames: [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
};
