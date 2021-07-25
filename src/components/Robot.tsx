import React from 'react'

import styles from './Robot.module.scss'

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <li className={styles.robotItem}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <span>{name}</span>
      <span>{email}</span>
    </li>
  )
}

export default Robot
