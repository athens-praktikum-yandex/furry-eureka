import React, { FC } from 'react';
import { Button, ButtonTextSize, ButtonTheme } from '@components/Button';
import { Input } from '@components/Input';
import { OwnProps } from './types';
import { TopicItem } from '../TopicItem';
import './Sidebar.css';

type Props = FC<OwnProps>;

export const Sidebar: Props = ({
  topicList,
  selectedTopicIdx,
  setSelectedTopicIdx,
  addHandler,
  addInputValue,
  setAddInputValue,
}) => (
  <div className="sidebar">
    <div className="sidebar__header">
      <Input
        classNameWrapper="sidebar__search"
        placeholder="New topic name"
        name="addInput"
        value={addInputValue}
        onChange={(e) => setAddInputValue(e.currentTarget.value)}
      />
      <Button
        theme={ButtonTheme.square}
        value="Add"
        className="sidebar__new-button"
        textSize={ButtonTextSize.l}
        onClick={addHandler}
      />
    </div>

    <ul>
      {topicList.map(({
        id, name,
      }, idx) => (
        <TopicItem
          name={name}
          key={id}
          isSelected={idx === selectedTopicIdx}
          onClick={() => setSelectedTopicIdx(idx)}
        />
      ))}
    </ul>
  </div>
);
