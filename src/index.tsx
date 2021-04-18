import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@components/App/App';
import { registerServiceWorker } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
