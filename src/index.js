import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const root = ReactDOM.render(<App />, document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

