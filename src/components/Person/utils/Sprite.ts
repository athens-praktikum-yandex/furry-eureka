import { Resources } from '../../../utils/Resources';

export class Sprite {
  private url: string = '';

  private pos: number[] = [];

  private size: number[] = [];

  private speed?: number;

  private frames?: number[];

  private dir?: string;

  private once?: boolean;

  private index: number = 0;

  done: boolean = false;

  constructor(
    url: string,
    pos: number[],
    size: number[],
    speed?: number,
    frames?: number[],
    dir?: string,
    once?: boolean,
  ) {
    this.url = url;
    this.pos = pos;
    this.size = size;
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

  render(ctx: CanvasRenderingContext2D | null, resources: Resources) {
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
        y += frame * this.size[1];
      } else {
        x += frame * this.size[0];
      }
      ctx.clearRect(0, 0, 300, 300);
      ctx.drawImage(
        resources.get(this.url),
        x,
        y,
        this.size[0],
        this.size[1],
        0,
        0,
        this.size[0],
        this.size[1],
      );
    }
  }
}
