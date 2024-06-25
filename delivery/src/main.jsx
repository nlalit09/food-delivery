import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Help from './components/help.jsx'
import Offers from './components/offers.jsx'
import About from './components/about.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
const appRouter=createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/cart',
        element: <Cart />
        
      },
      
        {
          path:'/help',
          element: <Help />
          
        },
        {
          path:'/about',
          element: <About />
          
        },
        {
          path:'/Offers',
          element: <Offers />
          
        },
        {
          path:'/restaurant/:resId',
          element:<RestaurantDetails />
        }
      

    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}></RouterProvider>
)
