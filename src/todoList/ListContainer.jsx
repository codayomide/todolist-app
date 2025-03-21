import FilterDesktop from "./FilterDesktop";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";
import TaskList from "./TaskList";

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
        {items.length == 0 ? (
          <div className="w-full h-full text-center my-4">No Items Here!</div>
        ) : (
          <TaskList
            items={items}
            handleReorder={handleReorder}
            handleCheckedStatus={handleCheckedStatus}
            deleteEvent={deleteEvent}
          />
        )}
      </ul>

      <div className="text-lmDarkGrayBlue text-sm font-medium flex justify-between px-4 py-5">
        <p>{`${items.length} ${items.length == 1 ? "item" : "items"} left`}</p>
        <FilterDesktop filter={filter} setFilter={setFilter} />
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default ListContainer;
