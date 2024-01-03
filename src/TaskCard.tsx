import { Task } from './data-tasks';

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div>
      <h1 className="m-2 rounded-lg border bg-gray-100 px-2 ">
        <div className="py-2 text-base font-semibold">{task.title}</div>
        <div className="flex justify-between py-2 text-gray-700">
          <div>{task.id}</div>
          <div>{task.points}</div>
        </div>
      </h1>
    </div>
  );
};

export default TaskCard;
