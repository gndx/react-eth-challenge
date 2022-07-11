import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './containers/App';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home" />);
