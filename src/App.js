import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/Auth/LoginPage';
import SignInPage from './components/Auth/SignInPage';
import HomePage from './components/Home/HomePage';

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
