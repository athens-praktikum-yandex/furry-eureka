import React from 'react';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();

  return (
    <canvas
      ref={canvasRef}
      width={808}
      height={808}
    />
  );
};
