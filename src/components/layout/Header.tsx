import Navbar from './Navbar';
import ProfileAvatar from './ProfileAvatar';
import { ModeToggle } from "../../components/mode-toggle";
import Logo from './Logo';
import Search from './Search';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 h-[72px]
      bg-gradient-to-r from-black/60 via-neutral-900/70 to-black/60
      backdrop-blur-xl 
      shadow-[0_0px_10px_rgba(255,100,0,0.15)]">
      
      {/* Left side */}
      <div className="flex items-center gap-6">
        <Logo />
        {/* <Navbar /> */}
      </div>
      
      {/* Right side */}
      <div className="flex items-center gap-5">
        <Search />
        <ModeToggle />
        <ProfileAvatar />
      </div>
    </header>
  )
}

export default Header;