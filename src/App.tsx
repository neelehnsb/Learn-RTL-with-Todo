import { useState } from "react";
import Todoform from "./components/todoform";
import Todolist from "./components/todolist";
import { EditComponent } from "./components/editComponent";

let taskToEdit = "";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [editCheck, setEditCheck] = useState<boolean>(false);

  const updateTodo = (todo: string): void => {
    todos.indexOf(todo) === -1
      ? setTodos((prev) => [...prev, todo])
      : alert("please use different task name");
  };
  const deleteTodo = (todo: string): void => {
    let Index = todos.indexOf(todo);
    if (Index !== -1) {
      let temp = [...todos];
      temp.splice(Index, 1);
      setTodos([...temp]);
    }
  };

  const editTodo = (TaskToEdit: string) => {
    setEditCheck(true);
    taskToEdit = TaskToEdit;
  };

  const close = () => {
    setEditCheck(false);
  };

  const saveEdit = (eTodo: string) => {
    let IndexToEdit = todos.indexOf(taskToEdit);
    let temp = [...todos];
    let success = false;
    if (todos.indexOf(eTodo) === -1) {
      temp[IndexToEdit] = eTodo;
      setTodos([...temp]);
      success = true;
    } else {
      alert("Task already exists");
    }
    if (success) {
      close();
    }
  };

  return (
    <div className="App bg-black pt-2 h-screen">
      <Todoform updateTodo={updateTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      {editCheck ? <EditComponent close={close} saveEdit={saveEdit} /> : ""}
    </div>
  );
}

export default App;
