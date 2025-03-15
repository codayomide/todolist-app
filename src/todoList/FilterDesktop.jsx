const FilterDesktop = ({ filter, setFilter }) => {
  return (
    <div className="w-[35%] hidden lg:flex justify-center">
      <div className="w-full font-semibold flex justify-between">
        <button
          onClick={() => setFilter("all")}
          className={`${filter === "all" ? "text-primaryBlue" : ""}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`${filter === "active" ? "text-primaryBlue" : ""}`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`${filter === "completed" ? "text-primaryBlue" : ""}`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterDesktop;
