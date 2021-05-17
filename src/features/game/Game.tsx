import React, { useEffect } from 'react';
import { useEndGame } from '@features/game/hooks/useEndGame';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '@features/UserProfileForm/store/actions';
import { CANVAS_SIZE } from './constants';
import { useFullscreen } from './hooks/useFullscreen';
import { useGame } from './hooks/useGame';

export const Game = () => {
  const canvasRef = useGame();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

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
