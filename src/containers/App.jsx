import React from 'react';
import '../styles/App.css';
import { ViteProvider } from '../context/ViteContext';
import { VitePage } from './VitePage';

function App() {
  return (
    <ViteProvider url="https://raw.githubusercontent.com/wolftrax5/react-eth-challenge/main/data.json">
      <VitePage />
    </ViteProvider>
  );
}

export default App;
