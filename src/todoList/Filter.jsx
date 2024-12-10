const Filter = () => {
  return (
    <div className="lg:hidden bg-white w-full shadow-xl rounded-md p-3 flex justify-center">
      <div className="w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%] font-medium flex justify-between">
        <button className="text-primaryBlue">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Filter;
