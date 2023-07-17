import React from 'react'
import { Link } from 'react-router-dom'

const WhiteBlackBtn = ({text}) => {
  return (
    <div className='white-black-btn'>
        <Link>{text}</Link>
    </div>
  )
}

export default WhiteBlackBtn