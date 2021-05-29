import React, { FC } from 'react';
import { Button, ButtonTextSize, ButtonTheme } from '@components/Button';
import { Input } from '@components/Input';
import { OwnProps } from './types';
import { TopicItem } from '../TopicItem';
import './Sidebar.css';

type Props = FC<OwnProps>;

export const Sidebar: Props = ({
  topicList,
  selectedTopicId,
  setSelectedTopicId,
  addClickHandler,
  addInputValue,
  addInputHandler,
}) => (
  <div className="sidebar">
    <div className="sidebar__header">
      <Input
        classNameWrapper="sidebar__search"
        placeholder="New topic name"
        name="addInput"
        value={addInputValue}
        onChange={addInputHandler}
      />
      <Button
        theme={ButtonTheme.square}
        value="Add"
        className="sidebar__new-button"
        textSize={ButtonTextSize.l}
        onClick={addClickHandler}
      />
    </div>

    <ul>
      {topicList.map(({
        id, name,
      }) => (
        <TopicItem
          name={name}
          key={id}
          isSelected={id === selectedTopicId}
          onClick={() => setSelectedTopicId(id)}
        />
      ))}
    </ul>
  </div>
);
