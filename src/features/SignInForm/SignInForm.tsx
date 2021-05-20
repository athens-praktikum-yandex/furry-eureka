import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { isServer } from '@libs/isServer';
import { InitialValues, OwnProps } from './types';
import { fields, initialValues } from './constants';
import { validationSchema } from './constants/validationSchema';
import { signIn } from './store/actions';
import { useLinks } from './hooks';
import { useOAuth } from './hooks/useOAuth';

type Props = FC<OwnProps>;

export const SignInForm: Props = ({ className }) => {
  const dispatch = useDispatch();
  const links = useLinks();

  if (!isServer) {
    useOAuth();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(signIn(values));
      }}
    >
      {(props: FormikProps<InitialValues>) => (
        <Form
          className={className}
          title="Вход"
          submitText="Войти"
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
