import { useContext, useState } from "react";
import ThemeContext from "../utils/ThemeContext";

const InputBar = ({ addItem }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      setText("");
      addItem(text);
    }
  };

  const handleClick = async () => {
    if (text.trim() !== "") {
      setText("");
      addItem(text);
    }
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`${
          theme == "light" ? "bg-white" : "bg-dmDarkDesBlue text-white"
        } w-full text-sm rounded-md px-8 py-4 focus:border-none outline-none`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleClick}
        className="text-primaryBlue absolute top-[26%] right-[2rem]"
      >
        Create
      </button>
    </div>
  );
};

export default InputBar;
