import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import "./styles/normalize.scss";
import "./styles/globals.scss";

const root = createRoot(document.getElementById('app'));


root.render(<App />);
