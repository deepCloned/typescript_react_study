import React, { useState } from 'react'

import styles from './ShopCar.module.scss'

interface Robot {
  name: number,
  id: string,
  email: string,
  count?: number
}

interface RobotProps {
  robotList: Robot[]
}

const ShopCar: React.FC<RobotProps> = ({robotList}) => {
  const [showShopList, setShowShopList] = useState(false)
  
  return (
    <div className={styles.shopCar}>
      <button
        className={`center ${styles.toggleBtn}`}
        onClick={() => setShowShopList(!showShopList)}
      >
        购物车
      </button>
      <ul
        className={styles.shopList}
        style={{
        display: showShopList ? 'block' : 'none'
      }}>
        {robotList.map(robot => {
          return (
            <li className={styles.shopItem}>
              <span>{robot.name}</span>
              <span>{robot.email}</span>
              <span>{robot.count}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShopCar
