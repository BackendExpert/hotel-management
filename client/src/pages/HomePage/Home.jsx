import React from 'react'
import HeroSection from './HeroSection'
import BookSectionHome from './BookSectionHome'
import WelcomeHotel from './WelcomeHotel'
import TopRooms from './TopRooms'
import Services from './Services'
import Experience from './Experience'
import StayConnected from './StayConnected'
import Seasonal from './Seasonal'

const Home = () => {
  return (
    <div className='mt-24 bg-[#e0e1df]'>
        <HeroSection />
        <BookSectionHome />
        <div className="pb-16">
          <Seasonal />
        </div>
        <div className="">
          <WelcomeHotel />
        </div>
        <div className="">
          <TopRooms />
        </div>
        <div className="">
          <Services />
        </div>
        <div className="">
          <Experience />
        </div>
        <div className="">
          <StayConnected />
        </div>
    </div>
  )
}

export default Home