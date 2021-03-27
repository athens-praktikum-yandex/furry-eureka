import { Sprite } from '../sprite';

export enum PersonType {
  HERO = 0,
  ENEMY_1 = 1,
}

export enum PersonActions {
  IDLE = 'idle',
  WALK = 'walk',
}

export type PersonSprites = {
  idle: Sprite | null;
  walk: Sprite | null;
};
