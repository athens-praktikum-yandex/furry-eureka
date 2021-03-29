import { ERROR_MESSAGES } from '@constants/errorMessages';
import * as yup from 'yup';
import { InitialValues } from '../types';

type Schema = Record<keyof InitialValues, yup.AnySchema>;

export const validationSchema = yup.object().shape<Schema>({
  login: yup
    .string()
    .required(ERROR_MESSAGES.required),
  password: yup
    .string()
    .required(ERROR_MESSAGES.required),
});
