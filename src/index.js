import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

//ReactDOM.render(<App />, document.getElementById('app'));

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
