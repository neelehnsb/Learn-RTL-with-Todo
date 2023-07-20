import TrashIcon from "./img/trash.png";
import EditIcon from "./img/edit.png";
import { useState } from "react";

const Todolist = ({
  todos,
  deleteTodo,
  editTodo,
}: {
  todos: string[];
  deleteTodo: Function;
  editTodo: Function;
}) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 h-96 p-4  bg-black border-4 rounded-lg border-white max-w-[600px] mx-auto">
      <div className=" w-8/12 mx-auto flex items-center">
        <form
          name="Search task"
          className="mx-auto"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            placeholder="Search Task"
            className="border-[1px] px-2  border-black rounded-lg"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </form>
      </div>
      <div className="flex flex-col gap-2 overflow-y-scroll w-9/12 mx-auto">
        {todos
          .filter((todo) => {
            console.log(search);
            return todo.includes(search);
          })
          .map((todo, index) => (
            <div className="flex justify-between " key={todo}>
              <div className="bg-white px-2 rounded-lg">
                <p key={index} className="text-lg text-black font-extrabold">
                  {todo}
                </p>
              </div>

              <div className="flex gap-5">
                <div className="p-1 bg-white rounded-lg ">
                  <img
                    src={TrashIcon}
                    alt={`${todo}_trash`}
                    id={todo}
                    className="h-5 bg-white cursor-pointer"
                    onClick={(event) => {
                      deleteTodo(event.currentTarget.id);
                    }}
                  />
                </div>

                <div className="p-1 bg-white rounded-lg ">
                  <img
                    src={EditIcon}
                    alt={`${todo}_edit`}
                    id={todo}
                    className="h-5 cursor-pointer "
                    onClick={(event) => {
                      editTodo(event.currentTarget.id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todolist;
