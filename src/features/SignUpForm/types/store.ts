import { InitialValues } from './initialValues';

export type SignUpPayload = Omit<InitialValues, 'passwordAgain'>;
