import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Pages/Auth/LoginPage';
import SignInPage from './Pages/Auth/SignInPage';
import HomePage from './Pages/Home/HomePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/signin",
    element: <SignInPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
