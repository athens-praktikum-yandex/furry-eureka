import { Sprite } from '../sprite';

export enum PersonType {
  HERO = 'hero',
  ENEMY_ARCHER = 'enemy_archer',
}

export enum PersonActions {
  IDLE = 'idle',
  WALK = 'walk',
}

export type PersonSprites = {
  idle: Sprite | null;
  walk: Sprite | null;
};
