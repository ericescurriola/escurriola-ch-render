import React from 'react';
import { createRoot } from 'react-dom/client';

import * as serviceWorker from './serviceWorker';
import App from './App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
