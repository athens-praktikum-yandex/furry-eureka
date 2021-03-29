import React from 'react';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={808}
        height={808}
      />
    </div>
  );
};
