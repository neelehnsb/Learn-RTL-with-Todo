function Todoform({ renderAdd }: { renderAdd: Function }) {
  return (
    <div className="w-full flex justify-center h-14">
      <button
        onClick={() => {
          renderAdd();
        }}
        className=" px-4 py-1 rounded-lg border-2 my-auto border-white text-white bg-black text-xl"
      >
        Add
      </button>
    </div>
  );
}

export default Todoform;
