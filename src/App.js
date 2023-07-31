import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import ToDoList from './Component/ToDoList'
import { Button } from '@mui/material';
import {ValidationSchemaExample} from './Component/SignUp'
import { Login } from './Component/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element = {<ValidationSchemaExample/>} path = "/signup/"></Route>
          <Route element = {<Login/>} path = "/login/"></Route>
          <Route element = {<Increment/>} path = "/increment/"></Route>
          <Route element = {<ToDoList/>} path = "/todolist/"></Route>
        </Routes>
      </Router>
    {/* <Increment/>
     <ToDoList/>
     <Button variant="text">Text</Button>
     <Button variant="contained">Contained</Button>
     <Button variant="outlined">Outlined</Button> */}
     </div>
  );
}

export default App;
