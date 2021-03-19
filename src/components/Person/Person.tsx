import React, { useLayoutEffect, useRef } from 'react';
import { OwnProps, PersonSprites } from './types';
import { Sprite } from './utils/Sprite';
import { Resources } from '../../utils/Resources';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import './Person.css';

type Props = OwnProps;

const resources = new Resources();
resources.load([HeroIdleImg, HeroWalkImg]);

const personSprites: PersonSprites = {
  walk: null,
  idle: null,
};

export const Person = (props: Props) => {
  const refContainer = useRef<HTMLCanvasElement>(null);
  switch (props.personType) {
    case 0:
      personSprites.idle = personSprites.idle instanceof Sprite
        ? personSprites.idle
        : new Sprite(HeroIdleImg, [63, 41], [170, 96], 16, [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
        ]);
      personSprites.walk = personSprites.walk instanceof Sprite
        ? personSprites.walk
        : new Sprite(HeroWalkImg, [66, 41], [170, 96], 16, [0, 1, 2, 3, 4, 5, 6, 7]);
      break;
    default: {
      personSprites.idle = null;
    }
  }

  function updateCanvas() {
    if (refContainer.current && resources.fullyLoaded) {
      const ctx = refContainer.current.getContext('2d');
      if (personSprites[props.action] !== null) {
        (personSprites[props.action] as Sprite).update(props.time);
        (personSprites[props.action] as Sprite).render(ctx, resources);
      }
    }
  }

  useLayoutEffect(() => {
    updateCanvas();
  });

  return <canvas ref={refContainer} width={34} height={35} />;
};
