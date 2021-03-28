import { InitialValues } from './initialValues';
import { signUp } from '../store/actions';

export type SignUpPayload = Omit<InitialValues, 'passwordAgain'>;

export type SignUp = ReturnType<typeof signUp>;
