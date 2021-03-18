import { Cell } from '../types';

const isLeftNeighbor = (cell1: Cell, cell2: Cell) => cell1.y === cell2.y
  && cell1.x === cell2.x - 1;

const isRightNeighbor = (cell1: Cell, cell2: Cell) => cell1.y === cell2.y
  && cell1.x === cell2.x + 1;

const isTopNeighbor = (cell1: Cell, cell2: Cell) => cell1.y === cell2.y - 1
  && cell1.x === cell2.x;

const isBottomNeighbor = (cell1: Cell, cell2: Cell) => cell1.y === cell2.y + 1
  && cell1.x === cell2.x;

const isNeighbor = (cell1: Cell, cell2: Cell) => isLeftNeighbor(cell1, cell2)
  || isRightNeighbor(cell1, cell2)
  || isTopNeighbor(cell1, cell2)
  || isBottomNeighbor(cell1, cell2);

export const isNeighborExist = (cell: Cell, map: Cell[]) => map
  .some((c) => isNeighbor(cell, c));
