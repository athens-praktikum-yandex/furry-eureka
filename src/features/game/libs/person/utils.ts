import { Cell } from '../map-generation';

const randomPositionMemo = () => {
  const occupiedCells: number[] = [];
  return (map: Cell[]) => {
    let cellIndex = Math.floor(Math.random() * map.length);
    while (occupiedCells.includes(cellIndex)) {
      cellIndex = Math.floor(Math.random() * map.length);
    }
    const position: Cell = map[cellIndex];
    occupiedCells.push(cellIndex);
    return {
      x: position.x,
      y: position.y,
    } as Cell;
  };
};

export const randomPosition = randomPositionMemo();
