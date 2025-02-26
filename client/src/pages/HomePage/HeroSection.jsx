import React from 'react'
import DefultBtn from '../../components/Buttons/DefultBtn'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
<div className='block relative bg-[url(https://wallpapercave.com/wp/wp4565526.jpg)] bg-cover bg-center h-[70vh] flex items-center justify-center'>
    <div className='absolute inset-0 bg-black opacity-60'></div>
    <div className="relative text-white text-2xl font-bold text-center">
        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
            Welcome to myhotels
        </h1>
        <div className="mt-4">
        <Link>
            <DefultBtn 
                type={'button'}
                btnvlaue={'Book Now'}
            />
        </Link>
        </div>
    </div>
</div>

  )
}

export default HeroSection