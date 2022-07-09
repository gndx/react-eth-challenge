import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import './index.css';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

