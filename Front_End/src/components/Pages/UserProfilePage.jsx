import UserProfile from "@/forms/userProfileForm/UserProfile";
import { useUpdateUser, useGetUser } from "@/api/userApi";
export default function UserProfilePage() {
  //custom hook to get the user profile from the database
  const { isLoading: getUserLoading, currentUser } = useGetUser();

  //custom hook to update the user profile in the database
  const { isLoading: updateUserLoading, updateUser } = useUpdateUser();

  //if the user profile is still loading, display a loading message
  if (getUserLoading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    return <div>Unable to load User Profile</div>;
  }

  return (
    <div className="">
      <div className="flex align-middle flex-col justify-center gap-2 mb-10">
        <span className="text-2xl font-bold text-center">User Profile</span>
        <span className=" text-lg text-gray-500 text-center">
          You can create/Edit your Profile
        </span>
      </div>
      <UserProfile
        currentUser={currentUser} //pass the current user which is fetched form the database
        isLoading={updateUserLoading}
        onSubmit={updateUser}
      />
    </div>
  );
}
