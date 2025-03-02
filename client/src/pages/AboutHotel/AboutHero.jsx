import React from 'react'

const AboutHero = () => {
  return (
    <div className='block relative bg-[url(https://wallpapercave.com/wp/wp12672099.jpg)] bg-cover bg-center h-[70vh] flex items-center justify-center'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className="relative text-white text-2xl font-bold text-center">
            <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                About Myhotels
            </h1>
        </div>
    </div>
  )
}

export default AboutHero