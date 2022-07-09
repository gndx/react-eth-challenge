import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('app'),
);
