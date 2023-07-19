import TrashIcon from "./img/trash.png";
import EditIcon from "./img/edit.png";

const Todolist = ({
  todos,
  deleteTodo,
  editTodo,
}: {
  todos: string[];
  deleteTodo: Function;
  editTodo: Function;
}) => {
  return (
    <div className="flex flex-col gap-2 h-96 p-4 overflow-y-scroll border-2 rounded-lg border-black max-w-[600px] mx-auto">
      {todos.map((todo, index) => (
        <div className="flex justify-between w-8/12 mx-auto" key={todo}>
          <p key={index} className="text-lg font-extrabold">
            {todo}
          </p>
          <div className="flex gap-5">
            <img
              src={TrashIcon}
              alt={`${todo}_trash`}
              id={todo}
              className="h-5 cursor-pointer"
              onClick={(event) => {
                deleteTodo(event.currentTarget.id);
              }}
            />
            <img
              src={EditIcon}
              alt={`${todo}_edit`}
              id={todo}
              className="h-5 cursor-pointer"
              onClick={(event) => {
                editTodo(event.currentTarget.id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
