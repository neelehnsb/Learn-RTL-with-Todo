import { useState } from "react";

function Todoform({ updateTodo }: { updateTodo: Function }) {
  const [todo, setTodo] = useState<string>("");

  return (
    <form
      className="mt-2 flex gap-2 w-min mb-2 mx-auto"
      onSubmit={(event) => {
        event.preventDefault();
        if (todo.length) updateTodo(todo);
        setTodo("");
      }}
    >
      <input
        className="border-[1px] px-2 border-black rounded-lg"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter a todo"
      />
      <button className=" px-4 py-1 rounded-lg text-white bg-black text-xl">
        Add
      </button>
    </form>
  );
}

export default Todoform;
