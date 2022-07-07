import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './containers/App';
import './styles/global.css'
const rootElement=document.getElementById('app')
const root=createRoot(rootElement)
root.render(<App/>)
