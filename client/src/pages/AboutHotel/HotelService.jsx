import React from 'react'

const HotelService = () => {
  return (
<div className="pb-24 overflow-x-hidden">

        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div data-aos="zoom-out" className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Our Services</p>
                    <p className="max-w-2xl">
                        At JehanKandyHotels, we go beyond just providing a place to stay. We offer a range of premium services to make your visit special.
                    </p>
                </div>
                <div data-aos="zoom-out" className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp12549190.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Our Services
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <p className="tracking-[.5em] text-xl pb-4 text-center">Luxurious Accommodation</p>
            <p className="text-center px-8">
                Enjoy a restful stay in our elegantly designed rooms, each offering a unique blend of comfort and sophistication. Choose from our wide range of accommodations:
            </p>

            <div className="grid xl:grid-cols-3 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Deluxe Rooms</h1>
                    <p className="">
                        Perfect for solo travelers or couples seeking a cozy experience.
                    </p>
                </div>

                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Executive Suites</h1>
                    <p className="">
                        Ideal for business travelers with added workspaces and premium amenities.
                    </p>
                </div>

                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Family Rooms</h1>
                    <p className="">
                        Spacious and designed for families looking for a comfortable stay.
                    </p>
                </div>

                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Presidential Suite</h1>
                    <p className="">
                        Ultimate luxury with private balconies and breathtaking views of Kandy.
                    </p>
                </div>

                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Honeymoon Suite</h1>
                    <p className="">
                        A romantic retreat with special decor, a private Jacuzzi, and stunning scenery.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Royal Villa</h1>
                    <p className="">
                        A private, high-end villa with exclusive services, a personal butler, and a private pool.
                    </p>
                </div>
            </div>

            <p className="text-center mt-10 px-8">
                All our rooms come with high-speed WiFi, 24/7 room service, air conditioning, flat-screen TVs, minibars, and plush bedding to guarantee an exceptional stay.
            </p>
        </div>
    </div>
  )
}

export default HotelService