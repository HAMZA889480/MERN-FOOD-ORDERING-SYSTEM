import UserMenu from "./UserMenu";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="ghost"
          className="bg-orange-500 text-white font-bold hover:text-orange-500 py-4  px-10 text-md hover:bg-orange-300"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </div>
  );
}
