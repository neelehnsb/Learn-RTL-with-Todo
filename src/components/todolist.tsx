import TrashIcon from "./img/trash.png";
import EditIcon from "./img/edit.png";
import { useState } from "react";

const Todolist = ({
  todos,
  deleteTodo,
  editTodo,
  taskPage,
}: {
  todos: {
    name: string;
    tags: string[];
    description: string;
    timeInMinutes: number;
  }[];
  deleteTodo: Function;
  editTodo: Function;
  taskPage: Function;
}) => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="flex flex-col gap-4 h-[500px] p-4  bg-black border-4 rounded-lg border-white w-[800px] mx-auto">
      <div className=" w-fit mx-auto flex items-center">
        <form
          name="Search task"
          className="mx-auto"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            placeholder="Search Task"
            className="border-[1px] px-2 py-1  w-72  border-black rounded-lg"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </form>
      </div>
      <div className="flex flex-col gap-7 overflow-y-scroll w-10/12 mx-auto">
        {todos
          .filter((todo) => {
            return todo.name.includes(search) || todo.tags.includes(search);
          })
          .map((todo, index) => (
            <div
              className="flex justify-between gap-3 items-center mr-2"
              key={todo.name}
            >
              <div className="bg-white px-2 flex flex-col  w-[600px] rounded-lg">
                <div className="w-[520px]">
                  <h2
                    onClick={(e) => {
                      e.preventDefault();
                      taskPage(todo.name);
                    }}
                    key={index}
                    title={`task_${index}`}
                    className="text-2xl max-w-fit truncate cursor-pointer text-black font-extrabold hover:underline"
                  >
                    {todo.name}
                  </h2>
                </div>

                <div className="flex gap-2">
                  {todo.tags.map((tag, index) => (
                    <h6
                      title={`${todo.name}_tag${index}`}
                      key={`${todo.name}_tag${index}`}
                      className=" text-gray-400 h-min"
                    >
                      {tag}
                    </h6>
                  ))}
                </div>
              </div>

              <div className="w-20">
                <div className="flex gap-5">
                  <div className="p-1 bg-white rounded-lg ">
                    <img
                      src={TrashIcon}
                      alt={`${todo.name}_trash`}
                      id={todo.name}
                      className="h-5 w-5 bg-white cursor-pointer"
                      onClick={(event) => {
                        deleteTodo(event.currentTarget.id);
                      }}
                    />
                  </div>

                  <div className="p-1 bg-white rounded-lg ">
                    <img
                      src={EditIcon}
                      alt={`${todo.name}_edit`}
                      id={todo.name}
                      className="h-5 w-5 cursor-pointer "
                      onClick={(event) => {
                        editTodo(event.currentTarget.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todolist;
