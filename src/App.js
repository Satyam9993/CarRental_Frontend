import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Landing from './pages/Landing';


function App(){
  return(
    <body>
    {/* <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section> */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
    </BrowserRouter>
    </body>

  );
}

export default App
