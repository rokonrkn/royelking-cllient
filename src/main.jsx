import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import SecondRoute from './components/Layout/SecondRoute.jsx';
import SecondHome from './SecondHome/SecondHome.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import RoomsDetails from './components/RoomsDetails/RoomsDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path: '/',
    element: <SecondRoute></SecondRoute>,
    children: [
      {
        path: '/secondhome',
        element: <SecondHome></SecondHome>
      },
      {
        path: 'about',
        element: <AboutPage></AboutPage>,
        // loader: ()=> fetch()
        
      },
    ]
  },
  
  {
    path: 'rooms',
    element: <RoomsDetails></RoomsDetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
