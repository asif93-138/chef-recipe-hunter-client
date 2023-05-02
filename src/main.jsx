import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Chefs from './components/Chefs/Chefs.jsx';
import Details from './components/Details/Details.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import SignUp from './components/SignUp/SineUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Chefs />,
        loader: () => fetch('http://localhost:3000/chefs')
      },
      {
        path: "/:id",
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
