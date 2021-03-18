import { isNeighborExist } from './is-neighbor-exist';
import { generateMap, isCellInMap } from '../map-generation';

describe('map generation', () => {
  const screenSize = 10;
  const cellCount = 14;

  describe('cells count should be equal to function param cellsCount', () => {
    test('1 cell', () => {
      const oneCellCount = 1;
      const map = generateMap(screenSize, oneCellCount);
      expect(map.length).toEqual(oneCellCount);
    });

    test('random cell count', () => {
      const randomCellCount = Math.floor(Math.random() * screenSize**2);
      const map = generateMap(screenSize, randomCellCount);
      expect(map.length).toEqual(randomCellCount);
    });

    test('maximum cell count', () => {
      const maximumCellCount = screenSize**2;
      const map = generateMap(screenSize, maximumCellCount);
      expect(map.length).toEqual(maximumCellCount);
    });
  });

  test('all cells should be in screen', () => {
    const map = generateMap(screenSize, cellCount);
    expect(map.every((cell) => isCellInMap(cell, screenSize))).toBeTruthy();
  });

  test('all cells should has neighbor', () => {
    const map = generateMap(screenSize, cellCount);
    expect(map.every((cell) => isNeighborExist(cell, map))).toBeTruthy();
  });
});
