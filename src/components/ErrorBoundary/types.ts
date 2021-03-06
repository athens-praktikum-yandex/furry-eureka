import { ErrorInfo, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export interface State {
  error?: Error;
  errorInfo?: ErrorInfo;
}
