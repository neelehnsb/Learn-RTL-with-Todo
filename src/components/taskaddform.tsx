import { useState } from "react";

export function TaskAddForm({
  closetaskadd,
  addtask,
  EditCheck,
  editSubmit,
  todoToEdit,
}: {
  closetaskadd: Function;
  addtask: Function;
  EditCheck: boolean;
  editSubmit: Function;
  todoToEdit: { name: string; tags: string[]; description: string };
}) {
  const [name, setName] = useState<string>(EditCheck ? todoToEdit.name : "");
  let [tags, setTags] = useState<string[]>([]);
  const [tagstring, setTagString] = useState<string>(
    EditCheck ? todoToEdit.tags.join(",") : ""
  );
  const [description, setDescription] = useState<string>(
    EditCheck ? todoToEdit.description : ""
  );

  return (
    <div className="h-[100vh] rounded-lg fixed w-screen top-0 right-0 z-10 backdrop-blur-md">
      <div className="h-[400px] relative z-10 w-96 mx-auto rounded-lg mt-28 flex flex-col gap-4 pt-3 bg-black border-2 border-white">
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
          id="add/button"
          title="add/edit"
          className="bg-black border-2 w-30 px-3 py-2 rounded-md mx-auto border-white text-white"
          onClick={() => {
            tags = tagstring.split(",");
            tags = tags.filter((tag, index) => tags.indexOf(tag) === index);
            setTags([...tags]);
            EditCheck
              ? editSubmit({ name: name, tags: tags, description: description })
              : addtask({ name: name, tags: tags, description: description });
            closetaskadd();
          }}
        >
          {EditCheck ? "Edit" : "Add"}
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
