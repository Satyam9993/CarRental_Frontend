import React, { useEffect } from 'react';
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
import Checkout from './Pages/Checkout/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { setCars, setLocations } from './reducer/user';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const {selectedLocation} = useSelector(state => state.user)

  useEffect(() => {
    // eslint-disable-next-line
    fetchCarData(selectedLocation);
    fetchLocationData();
  }, [])
  
  const fetchCarData = async (loc) => {
    const cars = await fetch(`${BACKEND_URL}/api/car?location=${loc}`);
    const data = await cars.json();
    dispatch(setCars({
      cars : data.cars
    }));
  };

  const fetchLocationData = async () => {
    const loc = await fetch(`${BACKEND_URL}/api/location`);

    const data = await loc.json();
    dispatch(setLocations({
      locations : data.locations
    }));
  }

  return (
    <div className="bg-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
