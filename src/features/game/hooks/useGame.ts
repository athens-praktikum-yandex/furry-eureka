import { useEffect, useRef } from 'react';
import { startGame } from '../start-game';

export const useGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    if (canvasRef.current !== undefined) {
      startGame(canvasRef.current as HTMLCanvasElement);
    }
  }, [canvasRef.current]);
  return canvasRef;
};
