import React from 'react';
import { SignInForm } from '@features/SignInForm';
import './SignInPage.css';
import { PageMeta } from '@components/PageMeta';

export const SignInPage = () => (
  <>
    <PageMeta
      title="Sign in"
      description="Here you can sign in app"
    />
    <SignInForm className="sign-in-page__form" />
  </>
);
