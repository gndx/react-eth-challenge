import React from 'react';
import '../styles/main.scss'
import Provider from '../components/Context';
import AppUI from './AppUI';

export default function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}
