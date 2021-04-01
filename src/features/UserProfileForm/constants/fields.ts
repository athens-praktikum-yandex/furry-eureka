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
  display_name: {
    label: 'Отображаемое имя',
  },
  oldPassword: {
    label: 'Старый пароль',
    type: 'password',
  },
  newPassword: {
    label: 'Новый пароль',
    type: 'password',
  },
  newPasswordAgain: {
    label: 'Новый пароль (ещё раз)',
    type: 'password',
  },
};
