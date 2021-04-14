import React, { FC } from 'react';
import { Button, ButtonTheme } from '@components/Button';
import { OwnProps } from './types';
import { TopicMessage } from '../TopicMessage';
import './Topic.css';

type Props = FC<OwnProps>;

export const Topic: Props = ({ topicMessageList }) => (
  <div className="topic">
    <ul className="topic__list">
      {topicMessageList.map((props) => (
        <TopicMessage
          {...props}
          className="topic__message"
        />
      ))}
    </ul>
    <div className="topic__textbox-container">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <div
        className="topic__textbox"
        role="textbox"
        contentEditable
        placeholder="Message"
      />
      <Button
        theme={ButtonTheme.circle}
        isIcon
        value="send"
      />
    </div>
  </div>
);
