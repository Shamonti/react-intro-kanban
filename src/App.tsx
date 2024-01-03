import './App.css';
import TaskCard from './TaskCard';
import { Task } from './data-tasks';

function App() {
  const task: Task = {
    title: 'Do Market Research',
    id: 'BUS-1',
    points: 5,
  };

  return (
    <>
      <TaskCard task={task} />
      {/* <TaskCard title="Computer Analysis" id="BUS-2" />
      <TaskCard title="Develop Business Strategy" id="BUS-3" points={8} />
      <TaskCard title="Develop Marketing Strategy" id="BUS-4" points={5} /> */}
    </>
  );
}

export default App;
