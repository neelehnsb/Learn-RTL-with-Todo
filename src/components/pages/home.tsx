import { useState, useEffect } from "react";
import Todoform from "../todoform";
import Todolist from "../todolist";
import { TaskAddForm } from "../taskaddform";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

let indexToEdit = -1;
let indexToShow = -1;

export const Home = ({
  taskName,
  oldtodos,
}: {
  taskName: Function;
  oldtodos: { name: string; tags: string[]; description: string }[];
}) => {
  console.log(oldtodos);
  let a: { name: string; tags: string[]; description: string }[] = [];
  const [todos, setTodos] = useState<
    { name: string; tags: string[]; description: string }[]
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
  }: {
    name: string;
    tags: string[];
    description: string;
  }) => {
    todos[indexToEdit].name = name;
    todos[indexToEdit].tags = tags;
    todos[indexToEdit].description = description;
    setTodos([...todos]);
  };

  const close = () => {
    setEditCheck(false);
  };

  const closetaskadd = () => {
    setAddCheck(false);
    setEditCheck(false);
  };

  const addTask = ({
    name,
    tags,
    description,
  }: {
    name: string;
    tags: string[];
    description: string;
  }) => {
    const temp = todos.filter((todo) => todo.name === name);
    if (temp.length === 0 && name.length > 0) {
      setTodos([
        ...todos,
        { name: name, tags: tags, description: description },
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
      indexToShow,
      todos
    );
    console.log(indexToShow);
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
        />
      ) : (
        ""
      )}
    </div>
  );
};
