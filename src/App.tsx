import { useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import { statuses, tasks as initialTasks, Task } from './utilities/data-tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status);

    return {
      title: status,
      tasks: taskInColumn,
    };
  });

  const updatedTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          points,
        };
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div>
            <div className="flex justify-between p-2 text-3xl font-bold text-gray-500">
              <h2 className=" capitalize ">{column.title}</h2>
              {column.tasks.reduce(
                (total, task) => total + (task?.points || 0),
                0,
              )}
            </div>
            {column.tasks.map((task) => (
              <TaskCard task={task} updateTaskPoints={updatedTaskPoints} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
