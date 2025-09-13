import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { RootState } from "@/utils/appStore";
import { BASE_URL } from "@/utils/constants";
import { removeUser } from "@/utils/userSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function ProfileAvatar() {
  const imageUrl = useSelector((state : RootState) => state.user?.imageUrl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {} , {withCredentials: true});
      navigate("/login");
      toast.success("Logout successful 🎉");
      dispatch(removeUser());
    } catch(error) {
      toast.error("😢 Something went wrong.");
    }
  }
  
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 rounded-full [&>svg]:hidden">
            <Link to="/profile">
              <Avatar>
                <AvatarImage src={imageUrl} alt="@shadcn" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="-right-2 left-auto">
            <ul className="grid gap-4 w-40">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/profile">Profile</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <button className="w-full text-left" onClick={handleLogout}>Logout</button>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default ProfileAvatar;

