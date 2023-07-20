import { useState } from "react";

function Todoform({ renderAdd }: { renderAdd: Function }) {
  const [todo, setTodo] = useState<string>("");

  return (
    // <form
    //   name="add todo form"
    //   className="flex gap-2 w-min mb-2 mx-auto"
    //   onSubmit={(event) => {
    //     event.preventDefault();
    //     if (todo.length) updateTodo(todo);
    //     setTodo("");
    //   }}
    // >
    //   <input
    //     className="border-[1px] px-2 border-black rounded-lg"
    //     type="text"
    //     value={todo}
    //     onChange={(e) => setTodo(e.target.value)}
    //     placeholder="enter a todo"
    //   />
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

    // </form>
  );
}

export default Todoform;
