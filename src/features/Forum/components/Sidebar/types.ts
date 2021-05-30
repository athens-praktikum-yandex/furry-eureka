import { ExtendedOwnProps as ButtonProps } from '@components/Button';
import { ExtendedOwnProps as InputProps } from '@components/Input';
import { Topic } from '@features/Forum/types';

export type OwnProps = {
  topicList: Topic[],
  selectedTopicId: number,
  setSelectedTopicId: (selectedTopicIdx: number) => void,
  addClickHandler: ButtonProps['onClick'],
  addInputValue: string,
  addInputHandler: InputProps['onChange'],
};
