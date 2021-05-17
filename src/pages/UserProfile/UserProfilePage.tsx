import React from 'react';
import { UserProfileForm } from '@features/UserProfileForm';
import './UserProfilePage.css';
import { PageMeta } from '@components/PageMeta';

export const UserProfilePage = () => (
  <>
    <PageMeta
      title="Profile"
      description="Here you can see and set your profile settings"
    />
    <UserProfileForm className="user-profile-page__form" />
  </>
);
