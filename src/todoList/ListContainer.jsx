import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

const ListContainer = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-md mb-6">
      <ul className="w-full h-fit">
        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm text-dmVeryDarkGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm decoration-lmLightGrayBlue line-through text-lmLightGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm text-dmVeryDarkGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm text-dmVeryDarkGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm text-dmVeryDarkGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-lmLightGrayBlue px-4 py-4">
          <span className="flex items-center">
            <button className="aspect-square rounded-full border-lmLightGrayBlue border w-6 mr-4 flex items-center justify-center">
              <img src={checkIcon} alt="Check Icon" className="w-3" />
            </button>
            <p className="text-sm text-dmVeryDarkGrayBlue">
              Complete online JavaScript course
            </p>
          </span>

          <button>
            <img src={crossIcon} alt="Check Icon" className="w-[15px]" />
          </button>
        </li>
      </ul>

      <div className="text-lmDarkGrayBlue text-sm flex justify-between px-4 py-5">
        <p>5 items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default ListContainer;
