
import Increment from '../Component/Increment';
import { ROUTES } from '../utils/routes';
import ToDoList from '../Component/ToDoList'
import LogOut from '../Component/LogOut';

export const PROTECTED_ROUTES = [
    {
      id: 1,
      path: ROUTES.PROTECTED_ROUTES_NAMES.root,
      element:<LogOut/>,

    },
    {
      id: 2,
      path: ROUTES.PROTECTED_ROUTES_NAMES.increment,
      element: <Increment/>,
    },
    {
      id: 3,
      path: ROUTES.PROTECTED_ROUTES_NAMES.todolist,
      element: <ToDoList/>,
    },
    ]