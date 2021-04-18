import React from 'react';
import { CANVAS_SIZE } from './constants';
import { useFullscreen } from './hooks/useFullscreen';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  useFullscreen(canvasRef);
  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
    />
  );
};
