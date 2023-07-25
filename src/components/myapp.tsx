import { TaskView } from "./pages/taskView";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/home";

let taskname = "";
let tasktags = [""];
let taskdescription = "";
let tasktimeInMinutes = 0;

let oldtodos: {
  name: string;
  tags: string[];
  description: string;
  timeInMinutes: number;
}[] = [];

export function MyApp() {
  const navigate = useNavigate();
  const taskName = (
    name: string,
    tags: string[],
    description: string,
    timeInMinutes: number,
    indexToShow: string,
    todos: {
      name: string;
      tags: string[];
      description: string;
      timeInMinutes: number;
    }[]
  ) => {
    [taskname, tasktags, taskdescription, tasktimeInMinutes, oldtodos] = [
      name,
      tags,
      description,
      timeInMinutes,
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
              timeInMinutes={tasktimeInMinutes}
              todos={oldtodos}
            />
          }
        />
      </Routes>
    </>
  );
}
