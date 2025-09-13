import Navbar from './Navbar';
import ProfileAvatar from './ProfileAvatar';
import { ModeToggle } from "../../components/mode-toggle";
import Logo from './Logo';
import Search from './Search';
import { useSelector } from 'react-redux';
import type { RootState } from '@/utils/appStore';

const Header = () => {
  const user = useSelector((store : RootState) => store.user);

  return (
    <header className="flex items-center justify-between px-8 py-4 h-[72px]
      bg-gradient-to-r dark:from-black/60 dark:via-neutral-900/70 dark:to-black/60
      from-white via-white to-white
      backdrop-blur-xl shadow-[0_0px_10px_rgba(255,100,0,0.15)]">
      
      <div className="flex items-center gap-6">
        <Logo />
        {/* <Navbar /> */}
      </div>
      
      <div className="flex items-center gap-5">
        <Search />
        <ModeToggle />
        {user && <ProfileAvatar/>}
      </div>
    </header>
  )
}

export default Header;