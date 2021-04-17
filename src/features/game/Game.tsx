import React from 'react';
import { useFullscreen } from './hooks/useFullscreen';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  useFullscreen(canvasRef);
  return (
    <canvas
      ref={canvasRef}
      width={808}
      height={808}
    />
  );
};
