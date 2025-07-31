import { Navigate, useNavigate } from "react-router";

import { AuthContext } from "../context/AuthContext";
import { Button } from "../components";
import { use } from "react"; //use is react 19, before we had useContext

const SignIn = () => {
  const { setUser, user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    //Usually this info needs to be sent to a backend for verification
    //Only when its verified, we do setUser

    setUser({ email, password });

    //Once user is stored in Context, we redirect them somewhere else for better UX
    navigate("/profile");
  };

  //Incase, the user is already logged in, we don't want them to see the sign in page
  //So, we redirect them to somewhere else
  if (user) return <Navigate to="/" />;

  return (
    <main>
      <form
        action={handleSubmit}
        className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <label className="block py-4">
          <span className="text-lg font-bold">Email</span>
          <input
            type="email"
            className="input mt-2 block w-full"
            name="email"
          />
        </label>
        <label className="block py-4">
          <span className="text-lg font-bold">Password</span>
          <input
            type="password"
            className="input mt-2 block w-full"
            name="password"
          />
        </label>
        <Button className="btn btn-primary mt-2 w-full text-white">
          Sign In
        </Button>

        {/* How to show dynamic text in components?
            Option 1 - Pass as regular props
            <Button text='Hello' />
            <Button text='Bye' />

            Option 2 - Pass as children props
            <Button className='btn btn-primary w-full mt-2 text-white'>WD64</Button>
        */}
      </form>
    </main>
  );
};

export default SignIn;
