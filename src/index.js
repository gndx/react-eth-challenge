import React from 'react';
import App from './containers/App';
import { createRoot } from 'react-dom/client';

const application = document.getElementById('app');
const root = createRoot(application);
root.render(<App />);
