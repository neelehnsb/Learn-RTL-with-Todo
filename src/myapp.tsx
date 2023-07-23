import { TaskView } from "./components/pages/taskView";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/pages/home";

let taskname = "";
let tasktags = [""];
let taskdescription = "";

let oldtodos: { name: string; tags: string[]; description: string }[] = [];

export function MyApp() {
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
