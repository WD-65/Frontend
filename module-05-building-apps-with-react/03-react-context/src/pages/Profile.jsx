import { AuthContext } from "../context/AuthContext";
import { use } from "react";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <main>
      <h1 className="py-2 text-center text-lg font-bold">My Profile</h1>
      <form className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <label className="block py-4">
          <span className="text-sm font-bold">Name</span>
          <input
            type="name"
            className="input input-neutral mt-2 block w-full"
            readOnly
            value="John"
          />
        </label>
        <label className="block py-4">
          <span className="text-sm font-bold">Email</span>
          <input
            type="email"
            className="input input-neutral mt-2 block w-full"
            readOnly
            value={user?.email ?? ""}
          />
        </label>
        <label className="block py-4">
          <span className="text-sm font-bold">Password</span>
          <input
            type="password"
            className="input input-neutral mt-2 block w-full"
            readOnly
            value={user?.password ?? ""}
          />
        </label>
      </form>
    </main>
  );
};

export default Profile;
