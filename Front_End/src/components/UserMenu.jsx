import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

export default function UserMenu() {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-5 text-xl text-orange-500 px-3 hover:text-orange-400">
        <CircleUserRound className=" font-bold text-2xl" />
        {user ? user.name : "User"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mt-5 w-52 bg-white">
        <DropdownMenuItem className="justify-center">
          <Link
            to="/user-profile"
            className="text-center text-lg hover:text-orange-500"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold text-lg bg-orange-500 mt-1"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
