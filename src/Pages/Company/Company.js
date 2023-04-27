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
                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340" />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
