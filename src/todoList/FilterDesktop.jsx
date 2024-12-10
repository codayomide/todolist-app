const FilterDesktop = () => {
  return (
    <div className="w-[35%] hidden lg:flex justify-center">
      <div className="w-full font-semibold flex justify-between">
        <button className="text-primaryBlue">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default FilterDesktop;
