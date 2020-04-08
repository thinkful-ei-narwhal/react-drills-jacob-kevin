import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './state-drills/statedrills'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'
import Accordion from './state-drills/Accordion'

const sections = [
  {
    id: 1,
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    id: 3,
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <div className="App">
      <Hello />
      <Bomb />
      <RouletteGun 
        bulletInChamber = {8}
      />
      <ul>
        {sections.map(section => <Accordion key={section.id} title={section.title} content={section.content}/>)}
      </ul>
    </div>
  );
}


export default App;
