import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { use } from "react";

const BookList = () => {
  const { dark, isLightMode, light } = use(ThemeContext);
  const themeStyle = isLightMode ? light : dark;

  const { isAuthenticated } = use(AuthContext);

  return (
    <div className={`${themeStyle.ui} flex-1 p-4`}>
      {isAuthenticated ? (
        <ul className="flex flex-col items-center space-y-4">
          <li
            className={`w-full max-w-md rounded-lg ${themeStyle.bg} p-3 text-center ${themeStyle.text}`}
          >
            The name of the wind
          </li>
          <li
            className={`w-full max-w-md rounded-lg ${themeStyle.bg} p-3 text-center ${themeStyle.text}`}
          >
            The way of the kings
          </li>
          <li
            className={`w-full max-w-md rounded-lg ${themeStyle.bg} p-3 text-center ${themeStyle.text}`}
          >
            The final empire
          </li>
        </ul>
      ) : (
        <p className="alert alert-warning">You are not authenticated. SHOO!</p>
      )}
    </div>
  );
};

export default BookList;
