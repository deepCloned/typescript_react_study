import React from 'react';

import styles from './Robot.module.scss';

interface RobotProps {
  id: Number;
  name: String;
  email: String;
  addToShopCar: Function;
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToShopCar }) => {
  return (
    <li className={styles.robotItem}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <span>{name}</span>
      <span>{email}</span>
      <button className={`center ${styles.addBtn}`} onClick={addToShopCar(id)}>
        加入购物车
      </button>
    </li>
  );
};

export default Robot;
