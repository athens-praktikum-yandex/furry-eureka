import { MutableRefObject, useEffect } from 'react';

export const useFullscreen = (container: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'F11') {
        e.preventDefault();
        if (document.fullscreenEnabled) {
          container.current?.requestFullscreen();
        }
      }
    };

    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, []);
};
