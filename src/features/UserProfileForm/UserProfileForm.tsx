import React, { FC } from 'react';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { InitialValues, OwnProps } from './types';
import { fields, initialValues } from './constants';
import { validationSchema } from './constants/validationSchema';

type Props = FC<OwnProps>;

export const UserProfileForm: Props = ({ className }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {(props: FormikProps<InitialValues>) => (
      <Form
        className={className}
        title="Настройки профиля"
        submitText="Сохранить"
        onSubmit={props.handleSubmit}
      >
        {Object.entries(fields).map(([name, { label, type }]) => (
          <FormikField key={name} name={name} label={label} type={type} />
        ))}
      </Form>
    )}
  </Formik>
);
