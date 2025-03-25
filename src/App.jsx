import InputBar from "./todoList/InputBar";
import ThemeBtn from "./header/ThemeBtn";
import ListContainer from "./todoList/ListContainer";
import FilterMobile from "./todoList/FilterMobile";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./utils/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const [checkList, setCheckList] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredList = checkList.filter((item) => {
    if (filter === "completed") return item.isChecked;
    if (filter === "active") return !item.isChecked;
    return true;
  });

  useEffect(() => {
    const savedList = localStorage.getItem("checkList");

    if (savedList) {
      setCheckList(JSON.parse(savedList));
    }

    const fetchData = async () => {
      try {
        await fetch(`http://localhost:3000/checkList`)
          .then((res) => res.json())
          .then((data) => {
            setCheckList(data.reverse());
            localStorage.setItem("checkList", JSON.stringify(data.reverse()));
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const addItem = async (text) => {
    const newItem = { id: Date.now(), text, isChecked: false };

    setCheckList((prevTasks) => {
      const updatedTasks = [...prevTasks, newItem];
      localStorage.setItem("checkList", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    try {
      const response = await fetch("http://localhost:3000/checkList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("API Down");
      }

      console.log("Task synced with API");

      // if (response.ok) {
      //   const updatedResponse = await fetch("http://localhost:3000/checkList");
      //   const updatedData = await updatedResponse.json();
      //   setCheckList(updatedData.reverse());
      // } else {
      //   console.error("API down");
      // }
    } catch (error) {
      console.log("Error adding item: ", error);

      // Maybe add an unsynced tasks function
    }
  };

  const handleDelete = async (id) => {
    const savedList = JSON.parse(localStorage.getItem("checkList"));

    if (savedList) {
      const updatedTasks = savedList.filter((task) => task.id !== id);
      setCheckList(updatedTasks);
      localStorage.setItem("checkList", JSON.stringify(updatedTasks));
    }

    try {
      await fetch(`http://localhost:3000/checkList/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("Error deleting item: ", error);
    }
  };

  const updateStatus = async (id, isChecked) => {
    const savedList = JSON.parse(localStorage.getItem("checkList"));
    const updatedTasks = savedList.map((task) =>
      task.id === id ? { ...task, isChecked: !isChecked } : task
    );
    setCheckList(updatedTasks);
    localStorage.setItem("checkList", JSON.stringify(updatedTasks));

    try {
      const response = await fetch(`http://localhost:3000/checkList/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isChecked: !isChecked }),
      });

      if (!response.ok) {
        throw new Error("API Down");
        // setCheckList((prevList) =>
        //   prevList.map((item) =>
        //     item.id === id ? { ...item, isChecked: !isChecked } : item
        //   )
        // );
      }
    } catch (error) {
      console.log("Error updating item: ", error);
    }
  };

  const clearCompleted = async () => {
    const savedList = JSON.parse(localStorage.getItem("checkList"));
    const completedItems = savedList.filter((item) => item.isChecked);
    const remainingItems = savedList.filter((item) => !item.isChecked);

    setCheckList(remainingItems);
    localStorage.setItem("checkList", JSON.stringify(remainingItems));

    await Promise.all(
      completedItems.map((item) => {
        fetch(`http://localhost:3000/checkList/${item.id}`, {
          method: "DELETE",
        });
      })
    );

    // setCheckList((prevList) => prevList.filter((item) => !item.isChecked));
  };

  return (
    <div
      className={`${
        theme == "light" ? "bg-white" : "bg-dmVeryBlue"
      } min-h-screen w-full flex flex-col items-center`}
    >
      <header
        className={`${
          theme == "light"
            ? "bg-imgBgMobileLight md:bg-imgBgDesktopLight"
            : "bg-imgBgMobileDark md:bg-imgBgDesktopDark"
        } bg-cover h-[30vh] w-full flex flex-col items-center py-4`}
      >
        <div className="w-[90%] sm:w-[60%] md:w-[55%] xl:w-[45%] 2xl:w-[35%]">
          <div className="flex justify-between mt-4 mb-8">
            <h1 className="text-white font-semibold text-2xl md:text-3xl">
              T O D O
            </h1>
            <ThemeBtn />
          </div>
          <InputBar addItem={addItem} />
        </div>
      </header>

      <div className="w-[90%] sm:w-[60%] md:w-[55%] xl:w-[45%] 2xl:w-[35%] flex items-center justify-center relative">
        <main className="bg-transparent w-full h-full flex flex-col items-center relative -top-9">
          <ListContainer
            items={filteredList}
            setItems={setCheckList}
            deleteEvent={handleDelete}
            handleCheckedStatus={updateStatus}
            clearCompleted={clearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
          <FilterMobile filter={filter} setFilter={setFilter} />
          <p className="text-lmDarkGrayBlue mt-12">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </div>
  );
}
