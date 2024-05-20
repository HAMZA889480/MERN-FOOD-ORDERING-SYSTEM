import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

//This component is used to wrap the entire application with the Auth0Provider
//This component helps to connect our application with Auth0

//Wrap the entire application with the Auth0Provider
function Auth0ProviderwithNav({ children }) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  const navigate = useNavigate();

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("auth0 provider is not connected");
  }

  const onRedirectCallback = () => {
    //navigate to the auth-callback page
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderwithNav;
