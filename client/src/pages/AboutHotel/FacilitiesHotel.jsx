import React from 'react'

const FacilitiesHotel = () => {
  return (
    <div className="pb-24">
        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div data-aos="zoom-in" className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Recreational & Wellness Facilities</p>
                    <p className="max-w-2xl">
                        Relax, rejuvenate, and have fun with our premium leisure facilities:
                    </p>
                </div>
                <div data-aos="zoom-in" className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp9384669.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Recreational & Wellness Facilities
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <div className="grid xl:grid-cols-4 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Infinity Swimming Pool</h1>
                    <p className="">
                        Overlooking the scenic beauty of Kandy.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Spa & Wellness Center</h1>
                    <p className="">
                        A variety of treatments including massages, facials, and Ayurvedic therapies.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Gym & Fitness Center</h1>
                    <p className="">
                        Fully equipped with state-of-the-art exercise machines.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Outdoor Activities</h1>
                    <p className="">
                        Guided hikes, cycling trails, and nature walks for adventure lovers.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FacilitiesHotel