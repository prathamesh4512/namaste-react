import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './src/components/Error';

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact-us",
        element: <Contact />
      }
    ],
    errorElement: <Error/> 
  },
  {
    path: '/restaurant/:resId',
    element: <RestaurantMenu />
  }
])

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);