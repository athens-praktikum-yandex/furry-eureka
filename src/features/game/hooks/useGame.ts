import { useEffect, useRef } from 'react';
import { startGame } from '../start-game';

export const useGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      startGame(canvasRef.current as HTMLCanvasElement);
    }
  }, [canvasRef.current]);
  return canvasRef;
};
