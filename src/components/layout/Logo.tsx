import React from 'react'
import { Link } from 'react-router-dom';
import devtinderLogo from '../../resources/images/devtinder.png';

const Logo = () => {
  return (
    <Link to="/" className='flex items-center gap-2 font-bold text-2xl'>
      <img src={devtinderLogo} alt="devtinder logo" className='w-6 h-8' />
      DevTinder
    </Link>
  )
}

export default Logo
