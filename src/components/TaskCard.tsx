import { Task } from '../utilities/data-tasks';

const lowPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="#00CFFF"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const mediumPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="#FFA500"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

const highPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="#FF2000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const TaskCard = ({
  task,
  updateTaskPoints,
}: {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
}) => {
  const points = task.points || 0;

  return (
    <div>
      <div className="m-2 w-56 rounded-lg border bg-gray-50 px-2">
        <div className="py-2 text-base font-semibold">{task.title}</div>
        <div className="flex justify-between py-2 text-gray-500">
          <div className="flex gap-2">
            <div>{task.id}</div>
            <div>
              {task.priority === 'high' && lowPriorityIcon}
              {task.priority === 'medium' && mediumPriorityIcon}
              {task.priority === 'low' && highPriorityIcon}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => updateTaskPoints(task, points - 1)}>
              -
            </button>
            <div className="font-semibold">{points}</div>
            <button onClick={() => updateTaskPoints(task, points + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
