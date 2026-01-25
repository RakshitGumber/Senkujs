import { authClient } from "@/libs/better-auth/client";

const Profile = () => {
  const { data: user } = authClient.useSession();

  return (
    <div className="flex items-center gap-2 justify-end">
      <h1>{user?.user.name}</h1>
      <img src={user?.user.image!} alt="Wow" className="w-12 rounded-full" />
    </div>
  );
};
export default Profile;
