import React, { ErrorInfo } from 'react';

import { Props, State } from './types';

const { PROD } = process.env;

export default class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  public render() {
    const { children } = this.props;
    const { errorInfo, error } = this.state;

    if (!PROD && errorInfo) {
      return (
        <>
          <h2>Что-то пошло не так.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </>
      );
    }

    return children;
  }
}
