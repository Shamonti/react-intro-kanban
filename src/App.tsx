import './App.css';
import TaskCard from './components/TaskCard';
import { statuses, tasks } from './utilities/data-tasks';

function App() {
  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status);

    return {
      title: status,
      tasks: taskInColumn,
    };
  });

  return (
    <>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div>
            <h2 className="p-2 text-3xl font-bold capitalize text-gray-500">
              {column.title}
            </h2>
            {column.tasks.map((task) => (
              <TaskCard task={task} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
