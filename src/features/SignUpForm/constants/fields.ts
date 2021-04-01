import { FieldItem } from '@components/FormikField';
import { InitialValues } from '../types';

export const fields: Record<keyof InitialValues, FieldItem> = {
  email: {
    label: 'Почта',
  },
  login: {
    label: 'Логин',
  },
  first_name: {
    label: 'Имя',
  },
  second_name: {
    label: 'Фамилия',
  },
  phone: {
    label: 'Телефон',
  },
  password: {
    label: 'Пароль',
    type: 'password',
  },
  passwordAgain: {
    label: 'Пароль (ещё раз)',
    type: 'password',
  },
};
