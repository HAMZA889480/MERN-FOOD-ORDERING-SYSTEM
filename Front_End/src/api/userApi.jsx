import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";

//custom hook to create a user in the database
//Inside this hook we are using the useMutation hook from react-query to create a user in the database
//the useMutate function will call the fetch function to create a user in the database

export const useCreateUser = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  //get the access token from auth0
  const { getAccessTokenSilently } = useAuth0();

  //function to create a user in the database
  const createUserRequest = async (user) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  //react-query hook for creating a user in the database
  const {
    mutateAsync: createUser, //mutateAsync is a function that will call the createUserRequest function
    isLoading,
    isSuccess,
    isError,
  } = useMutation(createUserRequest);

  return { createUser, isLoading, isSuccess, isError }; //returning the createUser function and the loading states
};

//custom hook to update the user profile in the database
export const useUpdateUser = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { getAccessTokenSilently } = useAuth0();

  const updateUserRequest = async (userProfileData) => {
    //console.log("userProfileData", userProfileData);
    //getting the name, phone, address and city from the userProfileData object
    //This data object is used to update the user in the database
    const updatedInfo = {
      name: userProfileData.name,
      phone: userProfileData.phone,
      address: userProfileData.address,
      city: userProfileData.city,
    };
    try {
      const token = await getAccessTokenSilently();
      // console.log("token", token);
      const response = await fetch(`${API_URL}/api/users`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.log(error);
      new Error("Failed to update user");
    }
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    isError,
    reset,
  } = useMutation(updateUserRequest);

  if (isSuccess) {
    toast.success("User updated successfully");
  }
  if (isError) {
    toast.error("Failed to update user");
    reset();
  }

  return { updateUser, isLoading, isSuccess, isError };
};

//custom hook to get the user profile in the database
export const useGetUser = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { getAccessTokenSilently } = useAuth0();

  const getUserRequest = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${API_URL}/api/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get user");
      }

      return response.json();
    } catch (error) {
      console.log(error);
      new Error("Failed to get user");
    }
  };

  const {
    data: currentUser,
    isLoading,

    error,
  } = useQuery("user", getUserRequest);

  if (error) {
    console.log(error);
    toast.error("Your Profile cannot be fetched");
  }

  return { currentUser, isLoading };
};
