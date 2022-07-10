import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';import App from './containers/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
