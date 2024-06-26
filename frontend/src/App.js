
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Home from './components/home/Home';
import Adduser from './components/adduser/Adduser';
import Getuser from './components/getUser/Getuser';
import Edituser from './components/updateUser/Edituser';

function App() {
const route=createBrowserRouter([
   {
     path:"/",
     element:<Home/>,
   },
   {
    path:"/add",
    element:<Adduser/>,
  },
  {
    path:"/edit/:id",
    element:<Edituser/>,
  },
  {
    path:"/getdata",
    element:<Getuser/>,
  },
  {
    path:"/delete",
    element:"delete",
  },
])

  return (
    <div className="App">
<RouterProvider   router={route}>
<Home/>
</RouterProvider>
    </div>
  );
}

export default App;
