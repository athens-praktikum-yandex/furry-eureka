import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTopic } from '../store/actions';

export const useAddTopic = (ownerId: number) => {
  const dispatch = useDispatch();

  const [addInputValue, setAddInputValue] = useState<string>('');

  const addInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddInputValue(e.currentTarget.value);
  };

  const addClickHandler = useCallback(() => {
    if (addInputValue && ownerId) {
      dispatch(createTopic({ name: addInputValue, ownerId }));
    }
  }, [addInputValue, ownerId]);

  return { addInputValue, addInputHandler, addClickHandler };
};
