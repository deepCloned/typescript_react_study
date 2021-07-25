import React, { useState } from 'react'

import styles from './ShopCar.module.scss'

const ShopCar: React.FC = () => {
  const [shopList] = useState([{id: 123, name: 456}])
  const [showShopList, setShowShopList] = useState(false)
  
  return (
    <div className={styles.shopCar}>
      <button
        className={styles.toggleBtn}
        onClick={() => setShowShopList(!showShopList)}
      >
        购物车
      </button>
      <ul style={{
        display: showShopList ? 'block' : 'none'
      }}>
        {shopList.map(shop => {
          return (
            <span>{shop.name}</span>
          )
        })}
      </ul>
    </div>
  )
}

export default ShopCar
