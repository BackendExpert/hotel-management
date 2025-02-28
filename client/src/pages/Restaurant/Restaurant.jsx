import React from 'react'
import ResHeroSection from './ResHeroSection'
import ResInfor from './ResInfor'
import WhyDineUs from './WhyDineUs'
import ThreeFoodRes from './ThreeFoodRes'


const Restaurant = () => {
  return (
    <div className='pt-24 bg-[#e0e1df]'>
        <div className="">
            <ResHeroSection />
        </div>
        <div className="">
            <ResInfor />
        </div>
        <div className="">
            <WhyDineUs />
        </div>
        <div className="">
            <ThreeFoodRes />
        </div>
    </div>
  )
}

export default Restaurant