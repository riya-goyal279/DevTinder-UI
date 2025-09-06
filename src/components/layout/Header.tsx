import Navbar from './Navbar';
import ProfileAvatar from './ProfileAvatar';
import Search from './Search';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='flex'>
        <Logo />
      <Navbar />
      <Search />
      <ProfileAvatar />
    </div>
  )
}

export default Header
