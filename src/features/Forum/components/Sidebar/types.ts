import { ExtendedOwnProps as ButtonProps } from '@components/Button';
import { Topic } from '@features/Forum/types';

export type OwnProps = {
  topicList: Topic[],
  selectedTopicIdx: number,
  setSelectedTopicIdx: (selectedTopicIdx: number) => void,
  addHandler: ButtonProps['onClick'],
  addInputValue: string,
  setAddInputValue: (value: string) => void,
};
