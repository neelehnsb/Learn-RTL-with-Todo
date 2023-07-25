import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let timerCheck = false;

export const TaskView = ({
  name,
  tags,
  description,
  timeInMinutes,
  todos,
}: {
  name: string;
  tags: string[];
  description: string;
  timeInMinutes: number;
  todos: {
    name: string;
    tags: string[];
    description: string;
    timeInMinutes: number;
  }[];
}) => {
  const navigate = useNavigate();
  const hour = Math.floor(timeInMinutes / 60);
  const minute = timeInMinutes - hour * 60;

  const [hours, setHours] = useState<number>(hour);
  const [minutes, setMinutes] = useState<number>(minute);
  const [seconds, setSeconds] = useState<number>(0);

  const timerButtons = (Button: string) => {
    if (Button === "play") {
      timerCheck = true;
    } else if (Button === "pause") {
      timerCheck = false;
    } else {
      setHours(hour);
      setMinutes(minute);
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerCheck) {
        if (seconds >= 1) {
          setSeconds(seconds - 1);
        } else if (minutes >= 1) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours >= 1) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <div className="w-full h-[100vh] pt-14 bg-black">
      <div className="bg-black w-[800px] mx-auto pb-8 rounded-xl border-4 border-white">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="text-white border-2 border-white rounded-md px-4 py-1 mt-2 ml-2"
        >
          back
        </button>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-3xl max-w-[550px] text-ellipsis overflow-hidden mx-auto ">
            {name}
          </h1>
          <hr className="border-gray-700"></hr>
          <div className="w-11/12 flex justify-center mx-auto">
            <div className="flex gap-4 overflow-x-scroll pb-3">
              <h2 className="text-lg  text-lime-300 font-extrabold ">Tags: </h2>
              {tags.map((tag, index) => (
                <h4 className="text-yellow-300 min-w-fit mx-auto" key={index}>
                  #{tag}
                </h4>
              ))}
            </div>
          </div>
          <div className="max-w-[550px] text-center mx-auto">
            <h3 className="text-white text-xl max-w-fit mx-auto ">
              {description}
            </h3>
          </div>
          <div>
            <p className="text-yellow-500 text-center pb-3">
              {String(hours).length === 1 ? `0${hours}` : `${hours}`}:
              {String(minutes).length === 1 ? `0${minutes}` : `${minutes}`}:
              {String(seconds).length === 1 ? `0${seconds}` : `${seconds}`}
            </p>

            <div className="flex gap-4 justify-center">
              <button
                className="border-2 border-white rounded-lg text-white border-spacing-1 px-4 py-2"
                onClick={() => timerButtons("play")}
              >
                Play
              </button>
              <button
                className="border-2 border-white rounded-lg text-white border-spacing-1 px-2 py-1"
                onClick={() => timerButtons("pause")}
              >
                Pause
              </button>
              <button
                className="border-2 border-white rounded-lg text-white border-spacing-1 px-2 py-1"
                onClick={() => timerButtons("reset")}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
