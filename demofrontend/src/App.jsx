import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Home.jsx";
import AddUser from './users/AddUser.jsx'
import Layout from './layout/Layout'; 
import EditUser from './users/EditUser.jsx'
import ViewUser from './users/ViewUser.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Root />
      },
      {
        path: "/adduser",
        element: <AddUser />
      },
      {
        path: "/edituser/:id",
        element: <EditUser />
      },
      {
        path: "/viewuser/:id",
        element: <ViewUser />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
