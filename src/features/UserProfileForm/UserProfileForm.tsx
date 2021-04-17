import React, { FC, useEffect } from 'react';
import { Formik, FormikProps } from 'formik';
import { Form } from '@components/Form';
import { FormikField } from '@components/FormikField';
import { useDispatch, useSelector } from 'react-redux';
import { InitialValues, OwnProps, UserProfileState } from './types';
import { fields, initialValues } from './constants';
import { validationSchema } from './constants/validationSchema';
import { getUserProfile, changePassword, changeUserProfile } from './store/actions';

type Props = FC<OwnProps>;

export const UserProfileForm: Props = ({ className }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state: UserProfileState) => state.userProfile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <Formik
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
              value={userProfile[name as keyof typeof userProfile]}
            />
          ))}
        </Form>
      )}
    </Formik>
  );
};
