import React, { FC } from 'react';
import { OwnProps } from './types';
import './Topic.css';
import { TopicMessage } from '../TopicMessage';

type Props = FC<OwnProps>;

export const Topic: Props = ({ topicMessageList }) => (
  <ul className="topic">
    {topicMessageList.map((props) => (
      <TopicMessage {...props} />
    ))}
  </ul>
);
