import React, { useState } from 'react';
import { Person } from '../Person/Person';
import { PersonActions } from '../Person/types';
import './App.css';

export const App = () => {
  const [time, setTime] = useState(0);
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef<number>();

  const animate = (currentTime: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (currentTime - previousTimeRef.current) / 1000;
      setTime(deltaTime);
    }
    previousTimeRef.current = currentTime;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  return (
    <div>
      <h1>Мой апп.</h1>
      <Person personType={0} action={PersonActions.WALK} time={time} />
    </div>
  );
};
