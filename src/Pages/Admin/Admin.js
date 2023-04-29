import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PieChart from "./Graphs/PieChart";
import LineGraph from './Graphs/LineGraph';
import BarGraph from './Graphs/BarGraph';

const Admin = () => {
    const { admin, admintoken } = useSelector((state) => state.admin);
    const navigate = useNavigate();

    useEffect(() => {
        if (!admin || !admintoken) {
            navigate("/admin/login")
        }
    }, [admin, admintoken])


    return (
        <div className='bg-gray-900'>
            <Navbar />
            <div>
                <div className='w-full flex justify-center'>
                    <div className='flex flex-col sm:w-[80%] md:w-[70%] lg:w-[50%]'>
                        <div className='p-4'>
                            <LineGraph />
                        </div>
                        <div className='p-4'>
                            <BarGraph />
                        </div>
                        <div className='p-4 sm:w-[100%] md:w-[70%] lg:w-[70%]'>
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
