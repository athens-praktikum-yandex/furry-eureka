import { Cell } from '../map-generation';

const randomPositionMemo = () => {
  const occupiedCells: number[] = [];
  return (map: Cell[], cellSideSize: number) => {
    let cellIndex = Math.floor(Math.random() * map.length);
    while (occupiedCells.includes(cellIndex)) {
      cellIndex = Math.floor(Math.random() * map.length);
    }
    const position: Cell = map[cellIndex];
    occupiedCells.push(cellIndex);
    return {
      x: position.x * cellSideSize,
      y: position.y * cellSideSize,
    } as Cell;
  };
};

export const randomPosition = randomPositionMemo();
