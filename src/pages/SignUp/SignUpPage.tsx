import React from 'react';
import { SignUpForm } from '@features/SignUpForm';
import './SignUpPage.css';
import { PageMeta } from '@components/PageMeta';

export const SignUpPage = () => (
  <>
    <PageMeta
      title="Sign up"
      description="Here you can sign up app"
    />
    <SignUpForm className="sign-up-page__form" />
  </>
);
