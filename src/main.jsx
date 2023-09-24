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
import PON from './components/PON/PON.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './providers/AuthProvider';
import SecuredPage from './components/SecuredPage/SecuredPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

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
        path: "/details/:id",
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/protected",
        element: <PrivateRoute><SecuredPage /></PrivateRoute>,
      },
      {
        path: '*',
        element: <PON />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
