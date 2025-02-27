import React from 'react'
import { Link } from 'react-router-dom'
import DefultBtn from '../../components/Buttons/DefultBtn'

const ActHero = () => {
  return (
    <div className='block relative bg-[url(https://wallpapercave.com/wp/wp9384669.jpg)] bg-cover bg-center h-[70vh] flex items-center justify-center'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className="relative text-white text-2xl font-bold text-center">
            <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                Impressive Experience with MyHotels
            </h1>
        </div>
    </div>
  )
}

export default ActHero