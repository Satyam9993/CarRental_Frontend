import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { setAdminLogin } from '../../reducer/Admin';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const RegisterSchema = Yup.object().shape({
        adminId: Yup.number("Id should be number").required("adminId is Required"),
        password: Yup.string()
            .min(4, 'Should be at least 4')
            .max(16, 'Should be at most 16')
            .required('password is Required!!'),
    });

    const handleLogin = async (values) => {
        const data = await fetch(`${BACKEND_URL}/api/admin/auth/login`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }
        );
        const login = await data.json();
        if(login){
            dispatch(setAdminLogin({
                admin: login.adminId,
                admintoken: login.adminauthToken
            }));
            navigate("/admin");
            console.log(login);
        }
    }

    return (
        <div className='flex justify-center items-center h-[100vh] w-full bg-gray-900'>
            <div className='border-2 border-r-2 border-gray-400 w-[50%] p-10 bg-[#000226] rounded-md'>
                <Formik
                    initialValues={{ adminId: '', password: '' }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values) => {
                        handleLogin(values);
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
                                <div className="w-full px-3 mb-5">
                                    <label className="text-gray-100 text-xs font-semibold px-1">Admin ID</label>
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
                                            onChange={handleChange('adminId')}
                                            value={values.adminId}
                                            placeholder="AdminId"
                                        />
                                    </div>
                                    {touched.adminId && errors.adminId && (
                                        <p className="text-[#ff0d10]">
                                            {errors.adminId}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-gray-100 text-xs font-semibold px-1">Password</label>
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
                                        type='submit'
                                    >
                                        Login NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
