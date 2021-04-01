import { ERROR_MESSAGES } from '@constants/errorMessages';
import * as yup from 'yup';
import { InitialValues } from '../types';

type Schema = Record<keyof InitialValues, yup.AnySchema>;

export const validationSchema = yup.object().shape<Schema>({
  email: yup
    .string()
    .required(ERROR_MESSAGES.required)
    .email(ERROR_MESSAGES.invalidFormat),
  login: yup
    .string()
    .required(ERROR_MESSAGES.required),
  first_name: yup
    .string()
    .required(ERROR_MESSAGES.required),
  second_name: yup
    .string()
    .required(ERROR_MESSAGES.required),
  display_name: yup
    .string()
    .required(ERROR_MESSAGES.required),
  phone: yup
    .string()
    .required(ERROR_MESSAGES.required),
  oldPassword: yup
    .string()
    .required(ERROR_MESSAGES.required),
  newPassword: yup
    .string()
    .required(ERROR_MESSAGES.required),
  newPasswordAgain: yup
    .string()
    .required(ERROR_MESSAGES.required)
    .when('newPassword', {
      is: (password: string) => !!(password?.length),
      then: yup.string().oneOf([yup.ref('newPassword')], ERROR_MESSAGES.passwordNotMatch),
    }),
});
