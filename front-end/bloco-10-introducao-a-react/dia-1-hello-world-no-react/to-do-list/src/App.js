import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['acordar', 'escovar os dentes', 'tomar café', 'academia'];

function App() {
  return (
    <ol>
      {tasks.map((task) => Task(task))}
    </ol>
  );
}

export default App;
