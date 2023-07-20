import { useState } from "react";
import Todoform from "./components/todoform";
import Todolist from "./components/todolist";
import { TaskAddForm } from "./components/taskaddform";
import { TaskView } from "./components/pages/taskView";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/pages/home";

let taskname = "";
let tasktags = ["try"];
let taskdescription = "";

function App() {
  const taskName = (name: string, tags: string[], description: string) => {
    [taskname, tasktags, taskdescription] = [name, tags, description];
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home taskName={taskName} />} />
          <Route
            path={`/task_${taskname}`}
            element={
              <TaskView
                name={taskname}
                tags={tasktags}
                description={taskdescription}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
