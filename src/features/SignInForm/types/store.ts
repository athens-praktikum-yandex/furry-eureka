import { InitialValues } from './initialValues';

export type SignInPayload = InitialValues;

type OAuthCommonPayload = {
  redirectUri: string,
};

export type OAuthRedirectPayload = {
  redirectCallback: (clientId: string) => void,
} & OAuthCommonPayload;

export type OAuthConfirmPayload = {
  code: string,
} & OAuthCommonPayload;
