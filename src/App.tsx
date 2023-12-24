import './App.css';

function App() {
  const title = 'Do Market Research';
  const id = 'BUS-1';
  const points = 5;
  return (
    <div>
      <h1 className="m-2 rounded-lg border bg-gray-100 px-2 ">
        <div className="py-2 text-base font-semibold">{title}</div>
        <div className="flex justify-between py-2 text-gray-700">
          <div>{id}</div>
          <div>{points}</div>
        </div>
      </h1>
    </div>
  );
}

export default App;
