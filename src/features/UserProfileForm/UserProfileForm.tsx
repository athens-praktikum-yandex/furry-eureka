import React, { FC, useEffect } from 'react';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { useDispatch } from 'react-redux';
import { InitialValues, OwnProps } from './types';
import { fields, initialValues } from './constants';
import { validationSchema } from './constants/validationSchema';
import { getUserProfile } from './store/actions';

type Props = FC<OwnProps>;

export const UserProfileForm: Props = ({ className }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
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
};
