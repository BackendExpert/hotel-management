import React from 'react'

const ResHeroSection = () => {
  return (
    <div className='block relative bg-[url(https://wallpapercave.com/wp/wp12956133.jpg)] bg-cover bg-center h-[70vh] flex items-center justify-center'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className="relative text-white text-2xl font-bold text-center">
            <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
              Restaurant & Bar – A Taste of Luxury
            </h1>
        </div>
    </div>
  )
}

export default ResHeroSection