import React from 'react'
import HeroSection from './HeroSection'
import BookSectionHome from './BookSectionHome'
import WelcomeHotel from './WelcomeHotel'
import TopRooms from './TopRooms'

const Home = () => {
  return (
    <div className='mt-24 bg-[#e0e1df]'>
        <HeroSection />
        <BookSectionHome />
        <div className="pb-16">
          <WelcomeHotel />
        </div>
        <div className="">
          <TopRooms />
        </div>
    </div>
  )
}

export default Home