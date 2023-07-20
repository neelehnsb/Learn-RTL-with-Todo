import { useReducer, useState } from "react";

const reducer = () => {};

export function TaskAddForm({
  closetaskadd,
  addtask,
  EditCheck,
  editSubmit,
}: {
  closetaskadd: Function;
  addtask: Function;
  EditCheck: boolean;
  editSubmit: Function;
}) {
  const [name, setName] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagstring, setTagString] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="h-[100vh] rounded-lg fixed w-screen top-0 right-0 z-10 backdrop-blur-md">
      <div className="h-[400px] relative w-96 mx-auto rounded-lg mt-28 flex flex-col gap-4 pt-3 bg-black border-2 border-white">
        <div className="w-60 mx-auto">
          <p className="text-white w-20 mx-auto">Task name</p>
          <input
            placeholder="Enter Task Name"
            className=" w-60 h-8 px-2 mx-auto rounded-md"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="w-60 mx-auto">
          <p className="text-white w-min mx-auto">Tags</p>
          <input
            value={tagstring}
            placeholder="Enter Task Tag"
            className=" w-60 h-8 px-2 mx-auto rounded-md"
            type="text"
            onChange={(e) => {
              setTagString(e.target.value);
              setTags(tagstring.split(","));
            }}
          ></input>
        </div>
        <div className="w-60 mx-auto">
          <p className="text-white w-min mx-auto">Description</p>
          <textarea
            value={description}
            className=" h-32 w-60 px-1 mx-auto rounded-lg"
            placeholder="Enter Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <button
          className="bg-black border-2 w-30 px-3 py-2 rounded-md mx-auto border-white text-white"
          onClick={() => {
            EditCheck
              ? editSubmit({ name: name, tags: tags, description: description })
              : addtask({ name: name, tags: tags, description: description });
            closetaskadd();
          }}
        >
          Add Task
        </button>
        <button
          className="absolute top-2 right-3 text-white bg-black border-2 px-3 rounded-lg border-white"
          onClick={() => {
            closetaskadd();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
