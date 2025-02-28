import React from 'react'

const HotelInfo = () => {
  return (
    <div className="py-24">
        <h1 className="text-center uppercase md:text-3xl font-semibold tracking-[.5em]">About JehanKandyHotels</h1>
        <p className="md:px-24 px-8 text-center mt-4">
            Welcome to <b>JehanKandyHotels</b>, your gateway to luxury, comfort, and breathtaking experiences in the heart of Kandy. Whether you’re visiting for a relaxing vacation, a romantic getaway, or a business trip, we ensure an unforgettable stay with world-class hospitality, elegant accommodations, and outstanding services tailored to your needs.
        </p>

        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp12672119.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Our Story
                        </h1>
                    </div>
                </div>
                <div className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Our Story</p>
                    <p className="max-w-2xl">
                        Nestled amidst the scenic landscapes of Kandy, JehanKandyHotels was established with a vision to offer travelers a seamless blend of traditional Sri Lankan hospitality and modern luxury. Our commitment to excellence and personalized service makes us one of the top choices for visitors seeking comfort and convenience.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelInfo