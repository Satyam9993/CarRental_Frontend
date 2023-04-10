import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../reducer/index";
import * as Yup from 'yup';
import { Formik } from 'formik';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required").min(4, "Min length 4 chars").max(16, "Max length 16 chars"),
  lastName: Yup.string().required("Last Name is Required").min(4, "Min length 4 chars").max(16, "Max length 16 chars"),
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string()
    .min(4, 'Should be at least 4')
    .max(16, 'Should be at most 16')
    .required('password is Required!!'),
});

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSignIn = async (values) => {
    if (!values.email || !values.firstName || !values.lastName || !values.password) {
      alert("Error")
    }
    const body = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password
    }
    const data = await fetch(`${BACKEND_URL}/api/auth/signin`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    const signin = await data.json();
    if (signin) {
      alert("email is send")
      setLoginData(body);
      setIsEmailSent(true);
    }
  }

  const handleVerifyotp = async () => {
    if (!loginData.email || !otp) {
      alert("Error")
    }
    setIsloading(true)
    const body = {
      email: loginData.email,
      otp: otp
    }
    const data = await fetch(`${BACKEND_URL}/api/auth/verifyotp`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    const virifiedData = await data.json();
    dispatch(setLogin({
      user: virifiedData.userId,
      token: virifiedData.token
    }));
    navigate("/");
    setLoginData({ firstName: '', lastName: '', email: '', password: '' });
    setIsloading(false)
  }


  return (
    <>
      {isloading ?
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-[#e8ecf4]">
          <img src="https://i.gifer.com/AGNA.gif" className="w-48 w-48" />
        </div>
        :
        <div>
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 drop-shadow-2xl">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
              <div className="md:flex w-full">
                <div className="hidden md:block w-1/2 bg-indigo-500">
                  <img src={require('../../assets/signin.gif')} className="w-full h-full p-0" />
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                  </div>
                  {!isEmailSent ? (
                    <Formik
                      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                      validationSchema={RegisterSchema}
                      onSubmit={(values) => {
                        handleSignIn(values);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit
                      }) => (
                        <div>
                          <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                              <label className="text-xs font-semibold px-1">First name</label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  {/* icon */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                  onChange={handleChange('firstName')}
                                  value={values.firstName}
                                  placeholder="John"
                                />
                              </div>
                              {touched.firstName && errors.firstName && (
                                <p className="text-[#ff0d10]">
                                  {errors.firstName}
                                </p>
                              )}
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                              <label className="text-xs font-semibold px-1">Last name</label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  {/* icon */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                  onChange={handleChange('lastName')}
                                  value={values.lastName}
                                  placeholder="Smith"
                                />
                              </div>
                              {touched.lastName && errors.lastName && (
                                <p className="text-[#ff0d10]">
                                  {errors.lastName}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label className="text-xs font-semibold px-1">Email</label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  {/* icon */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                  </svg>
                                </div>
                                <input
                                  type="email"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                  placeholder="johnsmith@example.com"
                                  onChange={handleChange('email')}
                                  value={values.email}
                                />
                              </div>
                              {touched.email && errors.email && (
                                <p className="text-[#ff0d10]">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                              <label className="text-xs font-semibold px-1">Password</label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  {/* icon */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                  </svg>
                                </div>
                                <input
                                  type="password"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                  onChange={handleChange('password')}
                                  value={values.password}
                                  placeholder="************"
                                />
                              </div>
                              {touched.password && errors.password && (
                                <p className="text-[#ff0d10]">
                                  {errors.password}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <button
                                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                onClick={() => {
                                  handleSubmit()
                                }}
                              >
                                REGISTER NOW
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Formik>
                  ) :
                    <>
                      <div>
                        <div className="flex -mx-3">
                          <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">First name</label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                value={loginData.firstName}
                                disabled={true}
                              />
                            </div>
                          </div>
                          <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                value={loginData.lastName}
                                disabled={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                              </div>
                              <input
                                type="email"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                value={loginData.email}
                                disabled={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-12">
                            <label className="text-xs font-semibold px-1">OTP</label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                {/* icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="OTP"
                                onChange={(e) => setOtp(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-full px-3 mb-5">
                            <button
                              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                              onClick={() => {
                                handleVerifyotp()
                              }}
                            >
                              Verify Email
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  }

                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
              </a>
            </div>
          </div>
        </div>}
    </>
  );
};

export default SignInPage;