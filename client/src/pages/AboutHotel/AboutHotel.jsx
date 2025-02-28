import React from 'react'
import AboutHero from './AboutHero'
import HotelInfo from './HotelInfo'
import HotelService from './HotelService'
import FoodHotel from './FoodHotel'
import FacilitiesHotel from './FacilitiesHotel'
import Event from './Event'
import Transportation from './Transportation'
import WhyHotel from './WhyHotel'

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
        <div className="">
            <FoodHotel />
        </div>
        <div className="">
            <FacilitiesHotel />
        </div>
        <div className="">
            <Event />
        </div>
        <div className="">
            <Transportation />
        </div>
        <div className="">
            <WhyHotel />
        </div>
    </div>
  )
}

export default AboutHotel