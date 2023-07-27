import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import ToDoList from './Component/ToDoList'
import { Button } from '@mui/material';
import {ValidationSchemaExample} from './Component/SignUp'

function App() {
  return (
    <div className="App">
     {/* <Increment/>
     <ToDoList/>
     <Button variant="text">Text</Button>
     <Button variant="contained">Contained</Button>
     <Button variant="outlined">Outlined</Button> */}
     <ValidationSchemaExample/>
    </div>
  );
}

export default App;
