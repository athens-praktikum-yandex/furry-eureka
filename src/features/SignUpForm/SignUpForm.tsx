import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { InitialValues, OwnProps } from './types';
import { fields, initialValues, links } from './constants';
import { validationSchema } from './constants/validationSchema';
import { signUp } from './store/actions';

type Props = FC<OwnProps>;

export const SignUpForm: Props = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(signUp(values));
      }}
    >
      {(props: FormikProps<InitialValues>) => (
        <Form
          className={className}
          title="Регистрация"
          submitText="Зарегистрироваться"
          links={links}
          onSubmit={props.handleSubmit}
        >
          {Object.entries(fields).map(([name, { label, type }]) => (
            <FormikField key={name} name={name} label={label} type={type} />
          ))}
        </Form>
      )}
    </Formik>
  );
};
