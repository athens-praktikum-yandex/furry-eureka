import { EventBus } from '@libs/event-bus';
import { Resources } from '@features/game/libs/resources';
import FightBackground from '@features/game/img/bg.gif';
import { EVENTS } from '@constants/events';
import { Person } from '../person';
import { MapView } from '../map-view/map-view';

export class GameEngine {
  private lastTime: number = 0;

  private eventBus: EventBus;

  private _isFight: boolean = false;

  constructor(
    private readonly characters: Person[],
    private readonly map: MapView,
    private readonly resources: Resources,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.eventBus = new EventBus();
    this.resources.load([
      FightBackground,
    ]);
  }

  startGame() {
    this.lastTime = Date.now();
    this.eventBus.on(EVENTS.PERSON_DEATH, (person) => {
      const remainHealth = (person !== undefined) ? this.characters[person].health : 0;
      this.eventBus.emit(EVENTS.END_GAME, Math.floor(remainHealth * 100));
    });
    this.eventBus.on(EVENTS.START_FIGHT, () => {
      this.startFight();
    });
    this.loop();
  }

  isFight() {
    return this._isFight;
  }

  startFight() {
    const [hero, enemy] = this.characters;
    this._isFight = true;
    this.eventBus.on(EVENTS.HERO_ATTACK_END, () => {
      enemy.health -= Math.floor(hero.strength * Math.random());
      if (enemy.health <= 0) {
        enemy.death();
      } else {
        enemy.attack();
      }
    });
    this.eventBus.on(EVENTS.ENEMY_ATTACK_END, () => {
      hero.health -= Math.floor(enemy.strength * Math.random());
      if (hero.health <= 0) {
        hero.death();
      }
    });
    hero.position = { x: 245, y: 250 };
    enemy.position = { x: 355, y: 250 };
  }

  fight() {
    const [hero, enemy] = this.characters;
    const { width, height } = this.canvas;
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(this.resources.get(FightBackground), 50, 0);
      ctx.fillStyle = '#FF0000';
      ctx.font = '24px Arial';
      ctx.fillText(hero.health.toString(), 5, 150);
      ctx.fillRect(20, 170, 10, hero.health * 2);
      ctx.fillText(enemy.health.toString(), 555, 150);
      ctx.fillRect(570, 170, 10, enemy.health * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px Arial';
      ctx.fillText('Hit - Press Enter key', 230, 450);
    }
  }

  stopFight() {
    this._isFight = false;
  }

  private loop = () => {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000;
    if (this._isFight) {
      this.fight();
    } else {
      this.map.render();
    }
    this.characters.forEach((ch) => ch.updateCanvas(dt));
    this.lastTime = now;
    requestAnimationFrame(this.loop);
  };
}
