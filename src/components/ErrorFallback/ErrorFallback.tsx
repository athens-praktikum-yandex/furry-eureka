import React from 'react';
import './ErrorFallback.css';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: React.ComponentType<FallbackProps> = ({ error }: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre className="error-message">{error.message}</pre>
  </div>
);
