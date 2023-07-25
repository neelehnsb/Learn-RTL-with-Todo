import { useState } from "react";
import Todoform from "../todoform";
import Todolist from "../todolist";
import { TaskAddForm } from "../taskaddform";

let indexToEdit = -1;
let indexToShow = -1;

export const Home = ({
  taskName,
  oldtodos,
}: {
  taskName: Function;
  oldtodos: {
    name: string;
    tags: string[];
    description: string;
    timeInMinutes: number;
  }[];
}) => {
  const [todos, setTodos] = useState<
    {
      name: string;
      tags: string[];
      description: string;
      timeInMinutes: number;
    }[]
  >(oldtodos || []);
  const [editCheck, setEditCheck] = useState<boolean>(false);
  const [addCheck, setAddCheck] = useState<boolean>(false);

  const renderAdd = () => {
    setAddCheck(true);
  };

  const deleteTodo = (todo: string): void => {
    let Index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name === todo) {
        Index = i;
        break;
      }
    }
    if (Index !== -1) {
      let temp = [...todos];
      temp.splice(Index, 1);
      setTodos([...temp]);
    }
  };
  const editTodo = (TaskToEdit: string) => {
    setEditCheck(true);
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name === TaskToEdit) {
        indexToEdit = i;
      }
    }
  };

  const editSubmit = ({
    name,
    tags,
    description,
    timeInMinutes,
  }: {
    name: string;
    tags: string[];
    description: string;
    timeInMinutes: number;
  }) => {
    todos[indexToEdit].name = name;
    todos[indexToEdit].tags = tags;
    todos[indexToEdit].description = description;
    todos[indexToEdit].timeInMinutes = timeInMinutes;
    setTodos([...todos]);
  };

  const closetaskadd = () => {
    setAddCheck(false);
    setEditCheck(false);
  };

  const addTask = ({
    name,
    tags,
    description,
    timeInMinutes,
  }: {
    name: string;
    tags: string[];
    description: string;
    timeInMinutes: number;
  }) => {
    const temp = todos.filter((todo) => todo.name === name);
    if (temp.length === 0 && name.length > 0) {
      setTodos([
        ...todos,
        {
          name: name,
          tags: tags,
          description: description,
          timeInMinutes: timeInMinutes,
        },
      ]);
    }
  };

  const taskPage = (page: string) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name === page) {
        indexToShow = i;
        break;
      }
    }
    taskName(
      todos[indexToShow].name,
      todos[indexToShow].tags,
      todos[indexToShow].description,
      todos[indexToShow].timeInMinutes,
      indexToShow,
      todos
    );
  };

  return (
    <div className=" bg-black pt-2 h-screen">
      <Todoform renderAdd={renderAdd} />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        taskPage={taskPage}
      />
      {editCheck ? (
        <TaskAddForm
          closetaskadd={closetaskadd}
          addtask={addTask}
          EditCheck={editCheck}
          editSubmit={editSubmit}
          todoToEdit={todos[indexToEdit]}
        />
      ) : (
        ""
      )}
      {addCheck ? (
        <TaskAddForm
          closetaskadd={closetaskadd}
          addtask={addTask}
          EditCheck={editCheck}
          editSubmit={editSubmit}
          todoToEdit={todos[indexToEdit]}
        />
      ) : (
        ""
      )}
    </div>
  );
};
