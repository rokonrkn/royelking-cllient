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
import Blog from './components/Blog/Blog.jsx';
import Contact from './components/Contact/Contact.jsx';

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
      }
    ]
  },
  {
    path: 'about',
    element: <AboutPage></AboutPage>

  },
  
  {
    path: 'rooms',
    element: <RoomsDetails></RoomsDetails>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
    
  },
  {
    path: '/contact',
    element: <Contact></Contact>
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
