import { Reorder } from "framer-motion";
import ThemeContext from "../utils/ThemeContext";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

const TaskList = ({
  items,
  handleReorder,
  handleCheckedStatus,
  deleteEvent,
}) => {
  const theme = { ThemeContext };
  return (
    <>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={(newOrder) => handleReorder(newOrder)}
      >
        {items.map((task) => (
          <Reorder.Item value={task} key={task.id}>
            <li
              className={`bg-white flex justify-between items-center border-b px-4 py-4 ${
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
                  onClick={() => handleCheckedStatus(task.id, task.isChecked)}
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
                <img
                  src={crossIcon}
                  alt="Check Icon"
                  className="w-[15px]"
                  onClick={() => deleteEvent(task.id)}
                />
              </button>
            </li>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};

export default TaskList;
