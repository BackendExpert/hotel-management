import React from 'react'

const Seasonal = () => {
  return (
    <div className="xl:px-32 md:px-10 px-4">
        <div className="xl:flex">
            <div className="block relative w-full bg-cover bg-center py-24 shadow-xl xl:mr-4 xl:my-0 my-8" style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp4565526.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className="relative text-white text-center">
                    <h1 className="text-2xl tracking-[.15em]">Get Discount upto 50% in Month of April</h1>
                </div>
            </div>
            <div className="xl:ml-4 block relative w-full bg-cover bg-center py-24 shadow-xl xl:my-0 my-8" style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp4565526.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className="relative text-white text-center">
                    <h1 className="text-2xl tracking-[.15em]">Get 10% Discount for every bookings, before 50 days to check-in data</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seasonal