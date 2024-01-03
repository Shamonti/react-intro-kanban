import { Task } from '../utilities/data-tasks';

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div>
      <div className="m-2 w-56 rounded-lg border bg-gray-50 px-2">
        <div className="py-2 text-base font-semibold">{task.title}</div>
        <div className="flex justify-between py-2 text-gray-500">
          <div>{task.id}</div>
          <div>{task.points}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
