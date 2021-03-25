import { Person, PersonActions, PersonType } from '@components/Person';
import React, { useEffect, useRef, useState } from 'react';
import { Cell, generateMap } from '@libs/map-generation';
import { KeyboardCatcher } from '@libs/keyboard-catcher';

const CELL_SIZE = 50;
const map = generateMap(11, 11).map((item) => ({ x: item.x * CELL_SIZE, y: item.y * CELL_SIZE }));
const startCellIndex = Math.floor(Math.random() * map.length);

const keyboardCatcher = new KeyboardCatcher({ dx: CELL_SIZE, dy: CELL_SIZE, map });
keyboardCatcher.init();

const hero = new Person(PersonType.HERO);
const enemyArcher = new Person(PersonType.ENEMY_ARCHER);

export const Game = () => {
  const [time, setTime] = useState(0);
  const [position, setPosition] = useState(map[startCellIndex]);
  const [action, setAction] = useState(PersonActions.IDLE);
  const prevPositionRef = useRef<Cell>();
  useEffect(() => {
    prevPositionRef.current = position;
  });
  const prevPosition = prevPositionRef.current;
  const refContainer = useRef<HTMLCanvasElement>(null);
  const ctx = (refContainer.current) ? refContainer.current.getContext('2d') : null;
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const animate = (currentTime: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (currentTime - previousTimeRef.current) / 1000;
      setTime(deltaTime);
    }
    previousTimeRef.current = currentTime;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  keyboardCatcher.setData(position, setPosition, setAction);
  hero.updateCanvas({
    ctx, action, position, prevPosition, time,
  });
  enemyArcher.updateCanvas({
    ctx, action: PersonActions.IDLE, position: map[map.length - startCellIndex], time,
  });

  return (
    <div>
      <h1>Игра</h1>
      <canvas ref={refContainer} width={600} height={600} />
    </div>
  );
};
