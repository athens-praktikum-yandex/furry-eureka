import React, { FC, useState } from 'react';
import { Button, ButtonTextSize, ButtonTheme } from '@components/Button';
import { Input } from '@components/Input';
import { OwnProps } from './types';
import { Topic } from '../Topic';
import './Sidebar.css';

type Props = FC<OwnProps>;

export const Sidebar: Props = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Input classNameWrapper="sidebar__search" placeholder="Search topic" name="" />
        <Button
          theme={ButtonTheme.square}
          value="New"
          className="sidebar__new-button"
          textSize={ButtonTextSize.l}
        />
      </div>

      <ul>
        {topics.map(({
          text, time, title, id,
        }, idx) => (
          <Topic
            text={text}
            time={time}
            title={title}
            key={id}
            isSelected={idx === selectedTopic}
            onClick={() => setSelectedTopic(idx)}
          />
        ))}
      </ul>
    </div>
  );
};
