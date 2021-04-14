import { InitialValues } from './initialValues';

export type ChangeUserProfilePayload = Omit<InitialValues, 'oldPassword' | 'newPassword' | 'newPasswordAgain'>;

export type ChangePasswordPayload = Pick<InitialValues, 'oldPassword' | 'newPassword' >;
