import React from 'react';

import robots from './mockData/robots.json'

import Robot from './components/Robot'
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <div className={styles.robotList}>
        {robots.map(r => {
          return (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
          )
        })}
      </div>
    </div>
  );
}

export default App;
