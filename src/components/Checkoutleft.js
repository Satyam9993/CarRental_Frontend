import React from 'react';
import Map from './Map';
import { useSelector } from 'react-redux';

const Checkoutleft = () => {
  const {pickuploc} = useSelector(state => state.user);
  return (
    <>
      <div className="px-3 md:w-5/12">
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
          <div className="w-full flex mb-3 items-center">
            <div className="w-32">
              <span className="text-gray-600 font-semibold">Contact</span>
            </div>
            <div className="flex-grow pl-3">
              <span>6698545865</span>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-32">
              <span className="text-gray-600 font-semibold">Pick-Up Address</span>
            </div>
            <div className="flex-grow pl-3">
              <span>{pickuploc.address === null ? "Select Address" : pickuploc.address}</span>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
          <Map />
        </div>
      </div>
    </>
  )
}

export default Checkoutleft;