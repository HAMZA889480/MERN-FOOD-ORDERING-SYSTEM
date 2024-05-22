import { useEffect, useRef } from "react";

import { useCreateUser } from "@/api/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

//This component is used to create a user in the database
// when the user logs in for the first time using Auth0 id and email
function AuthCallBackPage() {
  const { createUser } = useCreateUser();
  const { user } = useAuth0();

  const navigate = useNavigate();
  const hasUserCreated = useRef(false);

  useEffect(() => {
    //if the user is logged in and the user is not created in our database
    if (user?.sub && user?.email && !hasUserCreated.current) {
      //create a user in our database.We uses the createUser function from the userApi
      //The userApi is a custom hook that we created to interact with the user API
      createUser({
        auth0_id: user.sub,
        email: user.email,
        name: user.name,
      });
      hasUserCreated.current = true; //this is to prevent the user from being created multiple times

      //navigate back to home Page
      navigate("/");
    }

    //run the useEffect only when user change or createUser function changes
  }, [user, createUser, navigate]);

  return (
    <div>
      <span>Component is Loading......</span>
    </div>
  );
}

export default AuthCallBackPage;
