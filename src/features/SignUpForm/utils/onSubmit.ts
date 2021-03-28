import { FormikConfig } from 'formik';
import { InitialValues } from '../types';

export const onSubmit: FormikConfig<InitialValues>['onSubmit'] = (values) => {
  console.log(values);
};
