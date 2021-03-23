import React, { useLayoutEffect, useRef } from 'react';
import { OwnProps, PersonSprites } from './types';
import { Sprite } from './utils/Sprite';
import { Resources } from '../../utils/Resources';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import Enemy1IdleImg from './img/enemy1_idle.png';
import './Person.css';

type Props = OwnProps;

const resources = new Resources();
resources.load([HeroIdleImg, HeroWalkImg, Enemy1IdleImg]);

const personSprites: PersonSprites = {
  walk: null,
  idle: null,
};

export const Person = (props: Props) => {
  const spritesRef = useRef<PersonSprites>();
  const refContainer = useRef<HTMLCanvasElement>(null);
  switch (props.personType) {
    case 0:
      if (!spritesRef.current) {
        personSprites.idle = new Sprite(HeroIdleImg, [63, 41], [170, 96], 16,
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        personSprites.walk = new Sprite(HeroWalkImg, [66, 41], [170, 96], 16,
          [0, 1, 2, 3, 4, 5, 6, 7]);
        spritesRef.current = personSprites;
      }
      break;
    case 1:
      if (!spritesRef.current) {
        personSprites.idle = new Sprite(Enemy1IdleImg, [53, 36], [128, 128], 16,
          [0, 1, 2, 3, 4, 5, 6, 7]);
        spritesRef.current = personSprites;
      }
      break;
    default: {
      personSprites.idle = null;
    }
  }

  function updateCanvas() {
    if (refContainer.current && resources.fullyLoaded) {
      const ctx = refContainer.current.getContext('2d');
      if (spritesRef.current && spritesRef.current[props.action] !== null) {
        (spritesRef.current[props.action] as Sprite).update(props.time);
        (spritesRef.current[props.action] as Sprite).render(ctx, resources, props.position);
      }
    }
  }

  useLayoutEffect(() => {
    updateCanvas();
  });

  return <canvas ref={refContainer} width={300} height={300} />;
};
