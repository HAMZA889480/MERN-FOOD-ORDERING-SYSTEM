import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <div className="">
      <Link
        to="/profile"
        className=" text-center block py-2 px-4 text-xl text-orange-500 hover:text-orange-400"
      >
        Profile
      </Link>
      <Button
        onClick={() => logout()}
        className=" text-center flex-1 block w-full px-4 text-lg text-white bg-orange-500 "
      >
        Log Out
      </Button>
    </div>
  );
}
