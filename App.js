import React, { lazy, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import { createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import UserContext from './src/utils/UserContext';

const AppLayout = () => {

  const data = useContext(UserContext)
  console.log(data) // {userName:"Prathamesh"}

  const [a,setA] = useState("10")

  useEffect(()=>{
    setA(20)
  })

  debugger;

    return <UserContext.Provider value={{userName:"New User"}}>
    <div className="app">
        <Header/>
        <h1 className='hover:colo'>{a}</h1>
        <Body />
    </div>
    </UserContext.Provider>
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout/>,
//     children:[
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "lazy",
//         element: <Suspense fallback={<h1>Loading</h1>}>
//           <LazyComp />
//           </Suspense>
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact-us",
//         element: <Contact />
//       }
//     ],
//     errorElement: <Error/> 
//   },
//   {
//     path: '/restaurant/:resId',
//     element: <RestaurantMenu />
//   }
// ])

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);