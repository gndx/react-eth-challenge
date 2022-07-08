import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

// Before React 18
// ReactDOM.render(<App />, document.getElementById('app'));

// React 18 way...
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
