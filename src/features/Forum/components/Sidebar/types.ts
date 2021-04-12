import { OwnProps as TopicProps } from '../TopicItem';

export type OwnProps = {
  topicList: TopicProps[],
  selectedTopicIdx: number,
  setSelectedTopicIdx: (selectedTopicIdx: number) => void,
};
