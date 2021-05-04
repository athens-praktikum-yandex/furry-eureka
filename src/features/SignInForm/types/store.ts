import { InitialValues } from './initialValues';

export type SignInPayload = InitialValues;

export type OAuthPayload = {
  redirectUri: string,
  redirectCallback: (clientId: string) => void,
};
