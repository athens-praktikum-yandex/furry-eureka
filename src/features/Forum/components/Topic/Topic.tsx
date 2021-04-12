import React, { FC } from 'react';
import cn from 'classnames';
import { ExtendedOwnProps } from './types';
import './Topic.css';

type Props = FC<ExtendedOwnProps>;

export const Topic: Props = ({
  title,
  time,
  text,
  isSelected = false,
  ...props
}) => (
  <li
    className={cn(
      'topic',
      { topic_selected: isSelected },
    )}
    {...props}
  >
    <div className="topic__content">
      <div className="topic__header">
        <span className="topic__name">{title}</span>
        <time className="topic__time">{time}</time>
      </div>

      <span className="topic__message">
        {text}
      </span>
    </div>
  </li>
);
