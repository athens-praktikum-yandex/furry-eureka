import { InitialValues } from './initialValues';
import { signIn } from '../store/actions';

export type SignInPayload = InitialValues;

export type SignUp = ReturnType<typeof signIn>;
