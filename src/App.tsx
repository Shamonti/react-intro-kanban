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
      <div className="flex divide-y">
        {columns.map((column) => (
          <div>
            <h1>{column.title}</h1>
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
