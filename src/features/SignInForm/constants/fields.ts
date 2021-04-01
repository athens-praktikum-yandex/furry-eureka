import { FieldItem } from '@components/FormikField';
import { InitialValues } from '../types';

export const fields: Record<keyof InitialValues, FieldItem> = {
  login: {
    label: 'Логин',
  },
  password: {
    label: 'Пароль',
    type: 'password',
  },
};
