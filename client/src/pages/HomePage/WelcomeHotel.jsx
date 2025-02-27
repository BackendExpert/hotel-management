import React from 'react'

const WelcomeHotel = () => {
  return (
    <div className='xl:mx-28 md:mx-4 xl:mt-0 md:mt-8 mx-4 mt-8'>
        <div className="md:flex">
            <div className="block xl:h-[70vh] md:h-[40vh] h-[60vh] relative md:w-1/3 bg-[url(https://wallpapercave.com/wp/wp14964856.webp)] bg-cover bg-center py-16">
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>

            <div className="block xl:h-[70vh] md:h-[40vh] h-[60vh] relative md:w-1/3 bg-[url(https://wallpapercave.com/wp/wp15007546.webp)] bg-cover bg-center xl:p-4 md:p-2">
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 bg-[#4e5c4a] opacity-70'></div>
                <div className="relative xl:px-20 mx:8 border border-[#a4805a] h-full text-white flex flex-col justify-center items-center text-center p-4">
                    <h1 className="uppercase mb-8">Welcome to myhotels Resort</h1>
                    <h1 className="text-2xl font-semibold">
                        Experience Breathtaking Views with Our Hotel Booking System
                    </h1>
                </div>
            </div>

            <div className="block xl:h-[70vh] md:h-[40vh] h-[60vh] relative md:w-1/3 bg-[url(https://wallpapercave.com/wp/wp14964680.webp)] bg-cover bg-center py-16">
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeHotel