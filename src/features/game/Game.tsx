import React from 'react';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  return (
    <div>
      <h1>Игра</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
      />
    </div>
  );
};
