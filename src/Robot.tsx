import React from 'react'

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

const Robot: React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <span>{name}</span>
      <span>{email}</span>
    </li>
  )
}

export default Robot
