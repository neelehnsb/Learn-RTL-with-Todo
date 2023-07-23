import { useNavigate } from "react-router-dom";

export const TaskView = ({
  name,
  tags,
  description,
  todos,
}: {
  name: string;
  tags: string[];
  description: string;
  todos: { name: string; tags: string[]; description: string }[];
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] pt-14 bg-black">
      <div className="bg-black w-[600px] mx-auto h-96 rounded-xl border-4 border-white">
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
            <div className="flex gap-4">
              <h2 className="text-lg  text-lime-300 font-extrabold ">Tags: </h2>
              {tags.map((tag, index) => (
                <h4 className="text-yellow-300 w-fit mx-auto" key={index}>
                  #{tag}
                </h4>
              ))}
            </div>
          </div>
          <div className="max-w-[550px] text-center mx-auto">
            <h3 className="text-white text-xl w-min mx-auto ">{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
