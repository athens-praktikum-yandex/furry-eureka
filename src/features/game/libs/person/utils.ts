import { Cell } from '../map-generation';
import { MapView } from '../map-view/map-view';

const randomPositionMemo = () => {
  const occupiedCells: number[] = [];
  return (map: MapView) => {
    const mapCellsCount = map.scaledCells.length;
    const { cellSideSize } = map;
    let cellIndex = Math.floor(Math.random() * mapCellsCount);
    while (occupiedCells.includes(cellIndex)) {
      cellIndex = Math.floor(Math.random() * mapCellsCount);
    }
    const position: Cell = map.scaledCells[cellIndex];
    occupiedCells.push(cellIndex);
    return {
      x: position.x + cellSideSize / 2,
      y: position.y + cellSideSize / 2,
    } as Cell;
  };
};

export const randomPosition = randomPositionMemo();
