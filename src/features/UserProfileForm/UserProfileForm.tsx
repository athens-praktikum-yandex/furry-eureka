import React, { FC, useEffect } from 'react';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { useDispatch } from 'react-redux';
import { useInitialValues } from '@features/UserProfileForm/hooks/useInitialValues';
import { InitialValues, OwnProps } from './types';
import { fields } from './constants';
import { validationSchema } from './constants/validationSchema';
import { getUserProfile, changePassword, changeUserProfile } from './store/actions';

type Props = FC<OwnProps>;

export const UserProfileForm: Props = ({ className }) => {
  const dispatch = useDispatch();
  const initialValues = useInitialValues();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(changeUserProfile(values));

        if (values.oldPassword && values.newPassword) {
          dispatch(changePassword({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          }));
        }
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
            <FormikField
              key={name}
              name={name}
              label={label}
              type={type}
            />
          ))}
        </Form>
      )}
    </Formik>
  );
};
