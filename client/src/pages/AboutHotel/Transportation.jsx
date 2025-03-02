import React from 'react'

const Transportation = () => {
  return (
    <div className="pb-24">
        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div data-aos="zoom-in" className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Convenient Travel & Transportation</p>
                    <p className="max-w-2xl">
                        To make your journey seamless, we provide:
                    </p>
                </div>
                <div data-aos="zoom-in" className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp9167822.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Convenient Travel & Transportation
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <div className="grid xl:grid-cols-3 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Airport Shuttle Service</h1>
                    <p className="">
                        Hassle-free transfers from the airport to our hotel.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Car Rental & Taxi Services</h1>
                    <p className="">
                        Explore Kandy at your own pace.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Tour Packages & Sightseeing Assistance</h1>
                    <p className="">
                        Visit the Temple of the Tooth, Peradeniya Botanical Gardens, and other local attractions with our guided tours.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transportation