import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import ToDoList from './Component/ToDoList'

function App() {
  return (
    <div className="App">
     <Increment/>
     <ToDoList/>
    </div>
  );
}

export default App;
