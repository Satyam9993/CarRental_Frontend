import React from 'react';
import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='my-10 mx-[10%]'>
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="image" loading="lazy" width="" height="" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">A car rental company is a business that offers short-term or long-term rental of vehicles to customers.</h2>
                <p className="mt-6 text-gray-600">We have multiple locations, including airports, downtown areas, and suburban neighborhoods. They offer various rental options, such as daily, weekly, and monthly rentals, as well as one-way rentals and long-term leases.To rent a vehicle from a car rental company, customers typically need to meet certain requirements, such as being of a certain age and possessing a valid driver's license and credit card. Rental rates are typically based on factors such as the type of vehicle, rental duration, and any additional services or insurance purchased.</p>
                <p className="mt-4 text-gray-600"> We often provide additional services such as GPS navigation systems, car seats for children, and roadside assistance. Some companies also offer loyalty programs and discounts for frequent renters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About;
