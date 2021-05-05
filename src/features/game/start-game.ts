import { Person } from './libs/person';
import { PersonActions, PersonType } from './libs/person/types';
import { Resources } from './libs/resources';
import { GameEngine } from './libs/game-engine/game-engine';
import { MapView } from './libs/map-view/map-view';
import { generateMap } from './libs/map-generation';
import { KeyboardCatcher } from './libs/keyboard-catcher';
import { randomPosition } from './libs/person/utils';

export const startGame = (canvas: HTMLCanvasElement) => {
  const cellCoordinates = generateMap(8, 14);
  const resources = new Resources();
  const map = new MapView(cellCoordinates, canvas);
  const mainHero = new Person(PersonType.HERO, PersonActions.IDLE,
    randomPosition(map), resources, canvas, 30);
  const enemyArcher = new Person(PersonType.ENEMY_ARCHER, PersonActions.IDLE,
    randomPosition(map), resources, canvas, 20);
  const gameEngine = new GameEngine([mainHero, enemyArcher], map, resources, canvas);
  const keyboardCatcher = new KeyboardCatcher(map.cellSideSize, map.scaledCells,
    mainHero, enemyArcher);

  keyboardCatcher.init();
  gameEngine.startGame();

  return keyboardCatcher;
};
