import React from 'react';
import './App.scss';

import robots from './mockData/robots.json'

import Robot from './Robot'

function App() {
  return (
    <div className="App">
      <ul className="robot-list">
        {robots.map(r => {
          return (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
