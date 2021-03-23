import { PersonActions, Person } from '@components/Person';
import React, { useEffect, useRef, useState } from 'react';

export const Game = () => {
  const [time, setTime] = useState(0);
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

  return (
    <div>
      <h1>Игра</h1>
      <Person personType={0} action={PersonActions.WALK} position={[50, 50]} time={time} />
      <Person personType={1} action={PersonActions.IDLE} position={[100, 50]} time={time} />
    </div>
  );
};
