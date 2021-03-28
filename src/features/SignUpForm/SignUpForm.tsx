import React, { FC } from 'react';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { InitialValues, OwnProps } from './types';
import { fieldLabels, initialValues } from './constants';
import { onSubmit } from './utils';
import { validationSchema } from './constants/validationSchema';
import './SignUpForm.css';

type Props = FC<OwnProps>;

export const SignUpForm: Props = ({ className }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {(props: FormikProps<InitialValues>) => (
      <Form
        className={className}
        title="Регистрация"
        submitText="Зарегистрироваться"
        link={{
          to: '/sign-in',
          value: 'Войти',
        }}
        onSubmit={props.handleSubmit}
      >
        <div className="sign-up-form__content">
          {Object.entries(fieldLabels).map(([name, label]) => (
            <FormikField name={name} label={label} />
          ))}
        </div>
      </Form>
    )}
  </Formik>
);
