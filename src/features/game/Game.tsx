import React from 'react';
import { useEndGame } from '@features/game/hooks/useEndGame';
import { CANVAS_SIZE } from './constants';
import { useFullscreen } from './hooks/useFullscreen';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  useEndGame();
  useFullscreen(canvasRef);
  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
    />
  );
};
