import React, { useState } from 'react';

import robots from './mockData/robots.json';

import styles from './App.module.scss';
import Robot from './components/Robot';
import ShopCar from './components/ShopCar';

interface RobotItem {
  name: number;
  id: string;
  email: string;
  count?: number
}

function App() {
  const [robotList] = useState<RobotItem[]>([]);
  const addToShopCar = (id: any) => {
    console.log('dd')
    console.log(id);
  };

  return (
    <div className="App">
      <h4 className={styles.title}>无敌酷炫吊炸天机器人购物网</h4>
      <ShopCar robotList={robotList}></ShopCar>
      <div className={styles.robotList}>
        {robots.map((r) => {
          return (
            <Robot
              key={r.id}
              id={r.id}
              name={r.name}
              email={r.email}
              addToShopCar={addToShopCar}
            ></Robot>
          );
        })}
      </div>
    </div>
  );
}

export default App;
