import { useState } from "react";

export const EditComponent = ({
  close,
  saveEdit,
}: {
  close: Function;
  saveEdit: Function;
}) => {
  const [eTodo, setETodo] = useState<string>("");
  return (
    <div className="h-[100vh] fixed w-screen top-0 right-0 z-10 backdrop-blur-md">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          eTodo.length ? saveEdit(eTodo) : alert("cannot be empty");
        }}
        className="flex relative w-96 mx-auto rounded-2xl mt-20 bg-black flex-col gap-3 p-5 items-center text-center"
      >
        <input
          className="border-[1px] px-2 border-black rounded-lg"
          type="text"
          value={eTodo}
          onChange={(e) => {
            setETodo(e.target.value);
          }}
        ></input>
        <button className="px-4 py-1 rounded-lg bg-black border-4 border-white text-white">
          Save Changes
        </button>
        <button
          className="absolute top-2 right-3 text-white bg-black border-2 px-3 rounded-lg border-white"
          onClick={() => {
            close();
          }}
        >
          X
        </button>
      </form>
    </div>
  );
};
