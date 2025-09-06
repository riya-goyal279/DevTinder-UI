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

import { Link } from "react-router-dom";

function ProfileAvatar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 rounded-full [&>svg]:hidden">
            <Link to="/profile">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
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
                  <Link to="/logout">Logout</Link>
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

