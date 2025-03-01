import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import FilterDesktop from "./FilterDesktop";
import ThemeContext from "../utils/ThemeContext";
import { useContext, useEffect, useState } from "react";

const ListContainer = () => {
  const { theme } = useContext(ThemeContext);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:3000/checkList`)
          .then((res) => res.json())
          .then((data) => {
            setCheckList(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
        {checkList.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center border-b px-4 py-4 ${
              theme == "light"
                ? "border-lmVeryLightGray"
                : "border-lmVeryDarkGrayBlue"
            }`}
          >
            <span className="flex items-center">
              <button
                className={`aspect-square rounded-full border w-6 mr-4 flex items-center justify-center ${
                  theme == "light"
                    ? "border-lmVeryLightGray"
                    : "border-lmVeryDarkGrayBlue"
                } ${task.isChecked && "bg-checkGradientBg"}`}
              >
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  className={`w-3 ${!task.isChecked && "hidden"}`}
                />
              </button>

              <p
                className={`text-sm ${
                  theme == "light"
                    ? task.isChecked &&
                      "text-lmLightGrayBlue decoration-lmLightGrayBlue line-through"
                    : task.isChecked &&
                      "text-dmDarkGrayBlue decoration-dmDarkGrayBlue line-through"
                }`}
              >
                {task.text}
              </p>
            </span>

            <button>
              <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
            </button>
          </li>
        ))}
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
