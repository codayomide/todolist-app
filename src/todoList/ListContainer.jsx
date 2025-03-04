import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import FilterDesktop from "./FilterDesktop";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";
import { Reorder } from "framer-motion";

const ListContainer = ({
  items,
  setItems,
  deleteEvent,
  handleCheckedStatus,
  clearCompleted,
  filter,
  setFilter,
}) => {
  const { theme } = useContext(ThemeContext);

  const handleReorder = (newOrder) => {
    setItems((prevList) => {
      let updatedList = [...prevList];

      const reorderedIDs = newOrder.map((item) => item.id);

      let index = 0;
      updatedList = updatedList.map((item) => {
        if (reorderedIDs.includes(item.id)) {
          return newOrder[index++];
        }
        return item;
      });

      return updatedList;
    });
  };

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
        <Reorder.Group values={items} onReorder={handleReorder}>
          {items.map((task) => (
            <Reorder.Item value={task} key={task.id}>
              <li
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
      </ul>

      <div className="text-lmDarkGrayBlue text-sm font-medium flex justify-between px-4 py-5">
        <p>{`${items.length} items left`}</p>
        <FilterDesktop filter={filter} setFilter={setFilter} />
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default ListContainer;
