import { InitialState } from '@features/UserProfileForm';
import { InitialValues } from './initialValues';

export type ChangeUserProfilePayload = Omit<InitialValues, 'oldPassword' | 'newPassword' | 'newPasswordAgain'>;

export type ChangePasswordPayload = Pick<InitialValues, 'oldPassword' | 'newPassword' >;

export type GetUserProfileSuccessPayload = ChangeUserProfilePayload & {
  avatar: string,
  id: number
};

export type UserProfileState = { userProfile: InitialState };
