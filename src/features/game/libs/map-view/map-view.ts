import { Cell } from '../map-generation';

export class MapView {
  public readonly cellSideSize = 100;

  public readonly gap = 1;

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
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = '#403c3c';
      ctx.rect(xStartPosition + this.gap, yStartPosition + this.gap,
        this.cellSideSize, this.cellSideSize);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  };
}
