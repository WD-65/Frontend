import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
import { Link } from "react-router";
import { use } from "react"; //use is react 19, before we had useContext

const NavBar = () => {
  const { user, signOut } = use(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          React Context
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link to="/profile" className="p-0">
              <button className="btn btn-ghost w-full">Profile</button>
            </Link>
          </li>
          <li>
            {user ? (
              <Button className="btn btn-secondary w-full" onClick={signOut}>
                Sign Out
              </Button>
            ) : (
              <Link to="/signin" className="p-0">
                <Button className="btn btn-secondary w-full">Sign In</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
