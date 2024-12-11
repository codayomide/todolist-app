import InputBar from "./todoList/InputBar";
import ThemeBtn from "./header/ThemeBtn";
import ListContainer from "./todoList/ListContainer";
import FilterMobile from "./todoList/FilterMobile";
import { useContext } from "react";
import ThemeContext from "./utils/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme == "light" ? "bg-white" : "bg-dmVeryBlue"} min-h-screen w-full flex flex-col items-center`}>
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
          <InputBar />
        </div>
      </header>

      <div className="w-[90%] sm:w-[60%] md:w-[55%] xl:w-[45%] 2xl:w-[35%] flex items-center justify-center relative">
        <main className="bg-transparent w-full h-full flex flex-col items-center relative -top-9">
          <ListContainer />
          <FilterMobile />
          <p className="text-lmDarkGrayBlue mt-12">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </div>
  );
}
