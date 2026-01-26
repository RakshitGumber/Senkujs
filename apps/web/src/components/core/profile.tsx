import { authClient } from "@/libs/better-auth/client";
import { useState } from "react";
import Button from "../ui/button";

const Profile = () => {
  const { data: user } = authClient.useSession();

  const logoutUser = async () => {
    await authClient.signOut();
  };

  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-300 cursor-pointer"
        onClick={() => setToggleOptions(!toggleOptions)}
      >
        <h1>{user?.user.name}</h1>
        <img src={user?.user.image!} alt="Wow" className="w-12 rounded-full" />
      </div>
      {toggleOptions && (
        <div className="mx-2">
          <Button onClick={logoutUser}>Logout</Button>
        </div>
      )}
    </div>
  );
};
export default Profile;
