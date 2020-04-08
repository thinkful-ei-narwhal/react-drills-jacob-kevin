import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './state-drills/statedrills'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

function App() {
  return (
    <div className="App">
      <Hello />
      <Bomb />
      <RouletteGun 
        bulletInChamber = {8}
      />
    </div>
  );
}

export default App;
