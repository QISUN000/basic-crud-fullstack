import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Home.jsx";
import AddUser from './users/AddUser.jsx'
import Layout from './layout/Layout'; 

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
