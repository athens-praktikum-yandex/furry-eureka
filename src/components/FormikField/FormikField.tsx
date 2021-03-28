import React, { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from '@components/Input';
import { ExtendedOwnProps } from './types';

type Props = FC<ExtendedOwnProps>;

export const FormikField: Props = ({ name, label, ...props }) => (
  <Field name={name}>
    {({ field, meta, form }: FieldProps) => (
      <Input
        {...field}
        {...props}
        label={label}
        error={meta.touched ? meta.error : ''}
        // hide error
        onFocus={() => form.setFieldTouched(field.name, false)}
      />
    )}
  </Field>
);
