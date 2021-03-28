import { Person } from './libs/person';
import { PersonActions, PersonType } from './libs/person/types';
import { Resources } from './libs/resources';
import { GameEngine } from './libs/game-engine/game-engine';
import { MapView } from './libs/map-view/map-view';
import { generateMap } from './libs/map-generation';
import { KeyboardCatcher } from './libs/keyboard-catcher';
import { randomPosition } from './libs/person/utils';
import { HERO, ENEMY_ARCHER } from './libs/person/constants';

export const startGame = (canvas: HTMLCanvasElement) => {
  const cellCoordinates = generateMap(8, 14);
  const resources = new Resources();
  const map = new MapView(cellCoordinates, canvas);
  const mainHero = new Person(PersonType.HERO, PersonActions.IDLE,
    randomPosition(cellCoordinates, map.cellSideSize, HERO.IDLE.pictureSize),
    resources, canvas);
  const enemyArcher = new Person(PersonType.ENEMY_ARCHER, PersonActions.IDLE,
    randomPosition(cellCoordinates, map.cellSideSize, ENEMY_ARCHER.IDLE.pictureSize),
    resources, canvas);
  const keyboardCatcher = new KeyboardCatcher(map.cellSideSize + map.gap, cellCoordinates);
  const gameEngine = new GameEngine([mainHero, enemyArcher], map);
  keyboardCatcher.init();
  gameEngine.startGame();
};
