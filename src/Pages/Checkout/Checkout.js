import React from 'react'
import Checkoutleft from '../../components/Checkoutleft';
import CheckOutRight from '../../components/CheckOutRight';
const Checkout = () => {
    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-50 py-5">
                <div className="px-5">
                    <div className="mb-2">
                        <a href="#" className="focus:outline-none hover:underline text-gray-500 text-sm"><i className="mdi mdi-arrow-left text-gray-400"></i>Back</a>
                    </div>
                    <div className="mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
                    </div>
                    <div className="mb-5 text-gray-400">
                        <a href="#" className="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" className="focus:outline-none hover:underline text-gray-500">Cart</a> / <span className="text-gray-600">Checkout</span>
                    </div>
                </div>
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                    <div className="w-full">
                        <div className="-mx-3 md:flex items-start">
                            
                            <Checkoutleft />
                            
                            <CheckOutRight />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout;