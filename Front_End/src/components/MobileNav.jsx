import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
function MobileNav() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex gap-5 justify-center text-orange-500 hover:text-orange-400 cursor-pointer">
                <CircleUserRound className=" w-10 font-extrabold mt-1" />
                <span className="text-xl">{user.name}</span>
              </span>
            ) : (
              <span className="text-xl font-medium">
                Welcome to the Foodie Moodie
              </span>
            )}
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <SheetDescription className="flex flex-col gap-10 py-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-orange-500 text-lg"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
