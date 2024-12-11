import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import FilterDesktop from "./FilterDesktop";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";

const ListContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme == "light" ? "bg-white" : "bg-dmDarkDesBlue"
      } w-full shadow-xl rounded-md mb-6 lg:mb-2`}
    >
      <ul
        className={`${
          theme == "light" ? "text-dmVeryDarkGrayBlue" : "text-white"
        } w-full h-fit`}
      >
        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } aspect-square rounded-full border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3 hidden" />
            </button>
            <p className="text-sm">Complete online JavaScript course</p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } bg-checkGradientBg aspect-square rounded-full border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p
              className={`${
                theme == "light"
                  ? "text-lmLightGrayBlue decoration-lmLightGrayBlue"
                  : "text-dmDarkGrayBlue decoration-dmDarkGrayBlue"
              } text-sm line-through`}
            >
              Complete online JavaScript course
            </p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } aspect-square rounded-full border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3 hidden" />
            </button>
            <p className="text-sm">Complete online JavaScript course</p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3 hidden" />
            </button>
            <p className="text-sm">Complete online JavaScript course</p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3 hidden" />
            </button>
            <p className="text-sm">Complete online JavaScript course</p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li
          className={`${
            theme == "light"
              ? "border-lmVeryLightGray"
              : "border-lmVeryDarkGrayBlue"
          } flex justify-between items-center border-b px-4 py-4`}
        >
          <span className="flex items-center">
            <button
              className={`${
                theme == "light"
                  ? "border-lmVeryLightGray"
                  : "border-lmVeryDarkGrayBlue"
              } aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center`}
            >
              <img src={checkIcon} alt="Check Icon" className="w-3 hidden" />
            </button>
            <p className="text-sm">Complete online JavaScript course</p>
          </span>

          <button className="lg:hidden">
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>
      </ul>

      <div className="text-lmDarkGrayBlue text-sm font-medium flex justify-between px-4 py-5">
        <p>5 items left</p>
        <FilterDesktop />
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default ListContainer;
