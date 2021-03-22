import { Direction, Cell } from './types';

const rotate = (direction: Direction): Direction => {
  if (direction === 3) {
    return 0;
  }
  return (direction + 1) as Direction;
};

const move = (currentCell: Cell, direction: Direction): Cell => {
  switch (direction) {
    case 0:
      return { x: currentCell.x, y: currentCell.y - 1 };
    case 1:
      return { x: currentCell.x + 1, y: currentCell.y };
    case 2:
      return { x: currentCell.x, y: currentCell.y + 1 };
    case 3:
      return { x: currentCell.x - 1, y: currentCell.y };
    default:
      return currentCell;
  }
};

const isCellAlreadyExist = (cell: Cell, cells: Cell[]): boolean => cells
  .findIndex((c: Cell) => c.x === cell.x && c.y === cell.y) !== -1;

export const isCellInMap = (cell: Cell, screenSize: number): boolean => {
  const isCellCoordinateMoreOrEqualZero = cell.y >= 0 && cell.x >= 0;
  const isCellCoordinateLessThenMapSideSize = cell.x < screenSize && cell.y < screenSize;
  return isCellCoordinateMoreOrEqualZero && isCellCoordinateLessThenMapSideSize;
};

const generateRandomDirection = (): Direction => Math.floor(Math.random() * 4) as Direction;

const generateNextCell = (currentCell: Cell, screenSize: number, map: Cell[]): Cell => {
  let nextCell = currentCell;
  while (isCellAlreadyExist(nextCell, map)) {
    let direction = generateRandomDirection();
    let potentialNextCell = move(nextCell, direction);
    while (!isCellInMap(potentialNextCell, screenSize)) {
      direction = rotate(direction);
      potentialNextCell = move(nextCell, direction);
    }
    nextCell = potentialNextCell;
  }
  return nextCell;
};

export const generateMap = (screenSize: number, cellsCount: number) => {
  const map: Cell[] = [];
  const mapCenter = Math.floor(screenSize / 2);
  map.push({ x: mapCenter, y: mapCenter });
  let currentCell = { x: mapCenter, y: mapCenter };
  while (map.length < cellsCount) {
    const nextCell = generateNextCell(currentCell, screenSize, map);
    map.push(nextCell);
    currentCell = nextCell;
  }
  return map;
};
