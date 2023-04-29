import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Pages/Auth/LoginPage';
import SignInPage from './Pages/Auth/SignInPage';
import HomePage from './Pages/Home/HomePage';
import Product from './Pages/Product/Product';
import Company from './Pages/Company/Company';

// Admin
import Admin from './Pages/Admin/Admin';
import AdminLogin from './Pages/Admin/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/company",
    element: <Company />
  },
  {
    path: "/signin",
    element: <SignInPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/admin/login",
    element: <AdminLogin/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
]);

const App = () => {
  return (
    <div className="bg-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
