import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAdminLogout } from '../../reducer/Admin';

const Navbar = () => {
    const dispatch = useDispatch();
    const LogOut = () => {
        dispatch(setAdminLogout());
    }
    return (
        <header className="text-gray-100 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/admin' className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
                    <img src={require('../../assets/logo.png')} alt='Rent-Ur-Car' className='h-10 w-10'/>
                    Rent-Ur-Car
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to="/admin/location" className="mr-5 hover:text-gray-400">Locations</Link>
                    <Link to="/admin/car" className="mr-5 hover:text-gray-400">Cars</Link>
                    <Link to="/booking" className="mr-5 hover:text-gray-400">Booking</Link>
                </nav>
                <button className="text-gray-800 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={LogOut}>LogOut
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar
