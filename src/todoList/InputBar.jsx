import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const InputBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`${
          theme == "light" ? "bg-white" : "bg-dmDarkDesBlue text-white"
        } w-full text-sm rounded-md px-8 py-4 focus:border-none outline-none`}
      />
      <div className="aspect-square rounded-full w-6"></div>
    </div>
  );
};

export default InputBar;
