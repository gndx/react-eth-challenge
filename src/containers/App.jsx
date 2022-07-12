import React from 'react';
import '../styles/components/App.styl';
import Provider from '../components/Context';
import AppUI from './AppUI';

export default function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}
