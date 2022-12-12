
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import FindWork from './routes/findwork';
import GoPro from './routes/go-pro';
import Home from './routes/home';
import InspirationPage from './routes/inspiration';
import LearnDesign from './routes/learn-design';
import Login from './routes/login';
import Signup from './routes/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/inspiration",
    element: <InspirationPage />
  },
  {
    path: "/learn-design",
    element: <LearnDesign/>
  },
  {
    path: "/findwork",
    element: <FindWork />
  },
  {
    path: "/go-pro",
    element: <GoPro/>
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
