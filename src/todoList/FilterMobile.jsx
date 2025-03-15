import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const FilterMobile = ({ filter, setFilter }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme == "light"
          ? "bg-white text-dmVeryBlue"
          : "bg-dmDarkDesBlue text-lmDarkGrayBlue"
      } lg:hidden w-full shadow-xl rounded-md p-3 flex justify-center`}
    >
      <div className="w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%] font-medium flex justify-between">
        <button
          onClick={() => setFilter("all")}
          className={`${filter === "all" ? "text-primaryBlue" : ""}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`${filter === "active" ? "text-primaryBlue" : ""}`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`${filter === "completed" ? "text-primaryBlue" : ""}`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterMobile;
