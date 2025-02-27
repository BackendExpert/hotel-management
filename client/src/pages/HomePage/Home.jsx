import React from 'react'
import HeroSection from './HeroSection'
import BookSectionHome from './BookSectionHome'
import WelcomeHotel from './WelcomeHotel'
import TopRooms from './TopRooms'
import Services from './Services'
import Experience from './Experience'

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
        <div className="">
          <Services />
        </div>
        <div className="">
          <Experience />
        </div>
    </div>
  )
}

export default Home