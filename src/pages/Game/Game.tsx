import { PersonActions, Person } from '@components/Person';
import React, { useEffect, useRef, useState } from 'react';
import {generateMap, Cell} from '@libs/map-generation';
import {KeyboardCatcher} from '../../utils/KeyboardCatcher';

const SCREEN_SIZE = 700;
const map = generateMap(SCREEN_SIZE, 10);
const startCellIndex = Math.floor(Math.random() * map.length);
const keyboardCatcher = new KeyboardCatcher({dx: 5, dy: 5, map});
keyboardCatcher.init();

export const Game = () => {
  const [time, setTime] = useState(0);
  const [position, setPosition] = useState(map[startCellIndex]);
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

  keyboardCatcher.updatePosition(position, setPosition);

  return (
    <div>
      <h1>Игра</h1>
      <canvas ref={refContainer} width={SCREEN_SIZE} height={SCREEN_SIZE} />
      <Person ctx={ctx} personType={0} action={PersonActions.WALK}
              prevPosition={prevPosition} position={position} time={time} />
      <Person ctx={ctx} personType={1} action={PersonActions.IDLE}
              position={map[map.length - startCellIndex]} time={time} />
    </div>
  );
};
