import React from 'react'
import AboutHero from './AboutHero'
import HotelInfo from './HotelInfo'
import HotelService from './HotelService'

const AboutHotel = () => {
  return (
    <div className='pt-24 bg-[#e0e1df]'>
        <div className="">
            <AboutHero />
        </div>
        <div className="">
            <HotelInfo />
        </div>
        <div className="">
            <HotelService />
        </div>
    </div>
  )
}

export default AboutHotel