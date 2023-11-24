
import './App.css';
import AddTodo from './components/AddTodo.js';
import Todos from './components/Todos.js';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
