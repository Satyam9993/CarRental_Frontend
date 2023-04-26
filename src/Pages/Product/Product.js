import React from 'react'
import SideCheckout from '../../components/SideCheckout'
import ServiceDesp from '../../components/ServiceDesp'
import CarList from '../../components/CarList';
import Navbar from '../../components/Navbar';

const Product = () => {
    
    return (
        <>
        <Navbar />
        <CarList />
        <SideCheckout />
        <ServiceDesp />
        </>
    )
}

export default Product
