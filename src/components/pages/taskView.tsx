export const TaskView = ({
  name,
  tags,
  description,
}: {
  name: string;
  tags: string[];
  description: string;
}) => {
  return (
    <div className="bg-black">
      <p className="text-white">{name}</p>
      <p className="text-white">{description}</p>
    </div>
  );
};
