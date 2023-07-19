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
    <div className="flex flex-col gap-2 items-center h-96 overflow-y-scroll border-2 rounded-lg border-black max-w-[600px] mx-auto">
      {todos.map((todo, index) => (
        <div className="flex gap-4 items-center" key={todo}>
          <p key={index}>
            {">"}
            {todo}
          </p>
          <img
            src={TrashIcon}
            alt="trash-icon"
            id={todo}
            className="h-5 cursor-pointer"
            onClick={(event) => {
              deleteTodo(event.currentTarget.id);
            }}
          />
          <img
            src={EditIcon}
            alt="edit-icon"
            id={todo}
            className="h-5 cursor-pointer"
            onClick={(event) => {
              editTodo(event.currentTarget.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Todolist;
