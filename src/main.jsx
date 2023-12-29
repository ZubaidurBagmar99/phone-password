import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './component/layout/main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AboutUs from './component/AboutUs/AboutUs.jsx';
import Shop from './component/Shop/Shop.jsx';
import Invest from './component/Invest/Invest.jsx';
import Society from './component/Society/Society.jsx';
import Cart from './component/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/shop',
        element:<Shop></Shop>
      },
      {
        path:'/invest',
        element: <Invest></Invest>
      },
      {
        path: '/society',
        element: <Society></Society>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/about-us',
        element:<AboutUs></AboutUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
