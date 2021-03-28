import { Cell } from '../map-generation';

const randomPositionMemo = () => {
  const occupiedCells: number[] = [];
  return (map: Cell[], cellSideSize: number, pictureSize: number[]) => {
    let cellIndex = Math.floor(Math.random() * map.length);
    while (occupiedCells.includes(cellIndex)) {
      cellIndex = Math.floor(Math.random() * map.length);
    }
    const position: Cell = map[cellIndex];
    occupiedCells.push(cellIndex);
    return {
      x: position.x * cellSideSize + cellSideSize / 2 - Math.floor(pictureSize[0] / 2),
      y: position.y * cellSideSize + cellSideSize / 2 - Math.floor(pictureSize[1] / 2),
    } as Cell;
  };
};

export const randomPosition = randomPositionMemo();
