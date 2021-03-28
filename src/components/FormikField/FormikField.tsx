import React, { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from '@components/Input';
import { OwnProps } from './types';

type Props = FC<OwnProps>;

export const FormikField: Props = ({ name, label }) => (
  <Field key={name} name={name}>
    {({ field, meta, form }: FieldProps) => (
      <Input
        {...field}
        label={label}
        error={meta.touched ? meta.error : ''}
        // hide error
        onFocus={() => form.setFieldTouched(field.name, false)}
      />
    )}
  </Field>
);
