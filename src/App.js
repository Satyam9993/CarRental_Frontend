import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
// import LoginPage from './components/Auth/LoginPage';
// import SignInPage from './components/Auth/SignInPage';
// import HomePage from './components/Home/HomePage';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';


function App(){
  return(
    <body>
    <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
</body>

  );
}

export default App
