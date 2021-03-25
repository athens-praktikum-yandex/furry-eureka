import { Cell } from '@libs/map-generation';
import { Resources } from '@libs/resources/Resources';

export class Sprite {
  private url: string = '';

  private pos: number[] = [];

  private frameSize: number[] = [];

  private pictureSize: number[] = [];

  private speed?: number;

  private frames?: number[];

  private dir?: string;

  private once?: boolean;

  private index: number = 0;

  done: boolean = false;

  constructor(
    url: string,
    pos: number[],
    frameSize: number[],
    pictureSize: number[],
    speed?: number,
    frames?: number[],
    dir?: string,
    once?: boolean,
  ) {
    this.url = url;
    this.pos = pos;
    this.frameSize = frameSize;
    this.pictureSize = pictureSize;
    this.speed = speed;
    this.frames = frames;
    this.dir = dir || 'horizontal';
    this.once = once;
    this.index = 0;
    this.done = false;
  }

  update(dt: number) {
    if (this.speed !== undefined) {
      this.index += this.speed * dt;
    }
  }

  render(ctx: CanvasRenderingContext2D | null, resources: Resources,
    position: Cell, prevPosition: Cell | undefined) {
    if (ctx) {
      let frame;
      if (this.speed && this.speed > 0) {
        const max = Array.isArray(this.frames) ? this.frames.length : 0;
        const idx = Math.floor(this.index);
        frame = Array.isArray(this.frames) ? this.frames[idx % max] : 0;

        if (this.once && idx >= max) {
          this.done = true;
          return;
        }
      } else {
        frame = 0;
      }

      let x = this.pos[0];
      let y = this.pos[1];

      if (this.dir === 'vertical') {
        y += frame * this.frameSize[1];
      } else {
        x += frame * this.frameSize[0];
      }
      if (prevPosition) {
        ctx.clearRect(prevPosition.x, prevPosition.y, this.pictureSize[0], this.pictureSize[1]);
      } else {
        ctx.clearRect(position.x, position.y, this.pictureSize[0], this.pictureSize[1]);
      }
      ctx.drawImage(
        resources.get(this.url),
        x,
        y,
        this.pictureSize[0],
        this.pictureSize[1],
        position.x,
        position.y,
        this.pictureSize[0],
        this.pictureSize[1],
      );
    }
  }
}
