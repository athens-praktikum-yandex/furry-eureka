import { Sprite } from './utils/Sprite';

enum PersonType {
  HERO = 0,
  ENEMY_1 = 1,
}

export enum PersonActions {
  IDLE = 'idle',
  WALK = 'walk',
}

export type OwnProps = {
  personType: PersonType;
  position: number[];
  time: number;
  action: PersonActions;
};

export type PersonSprites = {
  idle: Sprite | null;
  walk: Sprite | null;
};
