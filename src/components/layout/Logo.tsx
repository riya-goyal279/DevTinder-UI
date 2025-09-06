import React from 'react'
import { Link } from 'react-router-dom';
import devtinderLogo from '../../resources/images/devtinder.png';

const Logo = () => {
  return (
    <div>
      <Link to="/" className='flex items-center'>
        <img src={devtinderLogo} alt="" className='w-6 h-8' />
        DevTinder
      </Link>
    </div>
  )
}

export default Logo
