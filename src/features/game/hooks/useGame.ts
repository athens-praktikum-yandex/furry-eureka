import { useEffect, useRef } from 'react';
import { EventBus } from '@libs/event-bus';
import { startGame } from '../start-game';
import { KeyboardCatcher } from '../libs/keyboard-catcher';

export const useGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let keyboardCatcher: KeyboardCatcher;

    if (canvasRef.current) {
      keyboardCatcher = startGame(canvasRef.current as HTMLCanvasElement);
    }

    return () => {
      const eventBus = new EventBus();
      eventBus.offAll();

      if (keyboardCatcher) {
        keyboardCatcher.exit();
      }
    };
  }, [canvasRef.current]);

  return canvasRef;
};
