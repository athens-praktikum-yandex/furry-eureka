import { PersonActions, Person } from '@components/Person';
import React, { useEffect, useRef, useState } from 'react';
import {KeyboardCatcher} from '../../utils/KeyboardCatcher';

const keyboardCatcher = new KeyboardCatcher({dx: 5, dy: 5});
keyboardCatcher.init();

export const Game = () => {
  const [time, setTime] = useState(0);
  const [position, setPosition] = useState([0, 0]);
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
      <Person personType={0} action={PersonActions.WALK} position={position} time={time} />
      <Person personType={1} action={PersonActions.IDLE} position={[100, 50]} time={time} />
    </div>
  );
};
