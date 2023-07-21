import { useState } from "react";
import Todoform from "./components/todoform";
import Todolist from "./components/todolist";
import { TaskAddForm } from "./components/taskaddform";
import { TaskView } from "./components/pages/taskView";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/pages/home";

let taskname = "dvdv";
let tasktags = ["try"];
let taskdescription = "vdvdcv";

let oldtodos: { name: string; tags: string[]; description: string }[] = [];

function App() {
  const navigate = useNavigate();
  const taskName = (
    name: string,
    tags: string[],
    description: string,
    indexToShow: string,
    todos: { name: string; tags: string[]; description: string }[]
  ) => {
    [taskname, tasktags, taskdescription, oldtodos] = [
      name,
      tags,
      description,
      todos,
    ];
    navigate(`/${indexToShow}`);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home taskName={taskName} oldtodos={oldtodos} />}
        />
        <Route
          path="/:id"
          element={
            <TaskView
              name={taskname}
              tags={tasktags}
              description={taskdescription}
              todos={oldtodos}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
