import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { use } from "react";

const Navbar = () => {
  const { dark, isLightMode, light, toggleTheme } = use(ThemeContext);
  const { toggleAuth, isAuthenticated } = use(AuthContext);
  const themeStyle = isLightMode ? light : dark;
  const auth = isAuthenticated ? "Log Out" : "Log In";

  return (
    <nav className={`${themeStyle.ui} p-4`}>
      <div className="flex items-center justify-between">
        <span
          onClick={toggleAuth}
          className={`cursor-pointer ${themeStyle.text}`}
        >
          {auth}
        </span>
        <span
          onClick={toggleTheme}
          className={`cursor-pointer ${themeStyle.text}`}
        >
          {isLightMode ? "Dark Mode🌙" : "Light Mode☀️"}
        </span>
      </div>

      <div className="mt-4 text-center">
        <h1 className={`text-3xl font-bold ${themeStyle.text}`}>Context App</h1>

        <ul className="mt-2 flex justify-center space-x-6">
          <li className={`${themeStyle.text}`}>Home</li>
          <li className={`${themeStyle.text}`}>About</li>
          <li className={`${themeStyle.text}`}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
