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
import Details from './component/Details/Details.jsx';
import Account from './component/Account/Account.jsx';
import ContactUs from './component/ContactUs/ContactUs.jsx';
import Blog from './component/Blog/Blog.jsx';
import Payment from './component/Payment/Payment.jsx';
import SocialMedia from './component/SocialMedia/SocialMedia.jsx';
import SiteMap from './component/SiteMap/SiteMap.jsx';
import TermsCondition from './component/TermsCondition/TermsCondition.jsx';
import PrivacyPolicy from './component/PrivacyPolicy/Privacypolicy.jsx';
import RefundPolicy from './component/RefundPolicy/RefundPolicy.jsx';
import ShippingPolicy from './component/ShippingPolicy/ShippingPolicy.jsx';
import ProductList from './component/ProductList/ProductList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          try {
            const response = await fetch('/products.json'); // Notice the leading slash
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            return []; // Return an empty array or handle the error as needed
          }
        }
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
        path:'/product-list',
        element: <ProductList></ProductList>
      },
      {
        path: '/shop',
        element:<Shop></Shop>,
        loader: async () => {
          try {
            const response = await fetch('/featureds.json'); // Notice the leading slash
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            return []; // Return an empty array or handle the error as needed
          }
        }
      },
      {
        path: '/details',
        element: <Details></Details>
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
      },
      {
        path: '/account',
        element: <Account></Account>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/social-media',
        element: <SocialMedia></SocialMedia>
      },
      {
        path: '/site-map',
        element: <SiteMap></SiteMap>
      },
      {
        path: '/terms-condition',
        element: <TermsCondition></TermsCondition>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: '/shipping-policy',
        element: <ShippingPolicy></ShippingPolicy>
      },
      {
        path: '/refund-policy',
        element: <RefundPolicy></RefundPolicy>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </React.StrictMode>,
);
