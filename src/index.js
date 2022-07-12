import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

import 'normalize.css';
import './styles/style.styl';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
