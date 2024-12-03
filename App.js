import React, { lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import { createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import { lazy, Suspense } from 'react';
const lazyComp = lazy(()=>import("./src/components/LazyComp"))

const AppLayout = () => {

  const [a,setA] = useState("10")

  useEffect(()=>{
    setA(20)
  })

  debugger;

    return <div className="app">
        <Header/>
        <h1 className='hover:colo'>{a}</h1>
        <Body />
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
        path: "lazy",
        element: <Suspense fallback={<h1>Loading</h1>}>
          <LazyComp />
          </Suspense>
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

root.render(<AppLayout />);