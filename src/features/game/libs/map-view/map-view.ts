import { Cell } from '../map-generation';

export class MapView {
  private readonly cellSideSize = 100;

  constructor(
    private readonly cellCoordinates: Cell[],
    private readonly canvas: HTMLCanvasElement,
  ) {
  }

  render() {
    this.cellCoordinates.forEach(this.renderCell);
  }

  private renderCell = (cell: Cell) => {
    const xStartPosition = cell.x * this.cellSideSize;
    const yStartPosition = cell.y * this.cellSideSize;
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(xStartPosition, yStartPosition, this.cellSideSize, this.cellSideSize);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}