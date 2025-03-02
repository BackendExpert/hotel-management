import React from 'react'
import ResHeroSection from './ResHeroSection'
import ResInfor from './ResInfor'
import WhyDineUs from './WhyDineUs'
import ThreeFoodRes from './ThreeFoodRes'
import BarRes from './BarRes'
import Promotions from './Promotions'


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
        <div className="">
            <BarRes />
        </div>
        <div className="pb-16">
            <Promotions />
        </div>
    </div>
  )
}

export default Restaurant