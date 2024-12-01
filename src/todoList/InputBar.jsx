const InputBar = () => {
  return (
    <div className="w-full">
      <input type="text" placeholder="Create a new todo..." className="w-full text-sm rounded-md px-8 py-4 focus:border-none outline-none" />
      <div className="aspect-square rounded-full w-6"></div>
    </div>
  );
};

export default InputBar;
