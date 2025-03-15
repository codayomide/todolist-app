import sunIcon from "../assets/images/icon-sun.svg";
import { useContext } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import ThemeContext from "../utils/ThemeContext";

const ThemeBtn = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="h-fit"
    >
      {theme == "light" ? (
        <img src={moonIcon} alt="Moon Icon" />
      ) : (
        <img src={sunIcon} alt="Moon Icon" />
      )}
    </button>
  );
};

export default ThemeBtn;
