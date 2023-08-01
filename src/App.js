import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import ToDoList from './Component/ToDoList'
import { Button } from '@mui/material';
import {SignUp} from './Component/SignUp'
import { Login } from './Component/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AuthRoutes from './routes/Auth';
import ProtectedRoutes from './routes/ProtectedRoutes';

 

function App() {
  const user = localStorage.getItem('myData');
  //debugger

  return (
   <div className="App">
     <Router>{user ? <ProtectedRoutes /> : <AuthRoutes />}</Router>
   </div>
  );
}

export default App;
