import { useContext, useState } from "react";
import ThemeContext from "../utils/ThemeContext";

const InputBar = ({ addItem }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      addItem(text).then(() => setText(""));
    }
  };

  return (
    <div className="w-full">
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
      <div className="aspect-square rounded-full w-6"></div>
    </div>
  );
};

export default InputBar;
