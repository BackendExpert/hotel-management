import React from 'react'
import ActHero from './ActHero'
import AcvitityContent from './AcvitityContent'

const Activity = () => {
  return (
    <div className='py-24 bg-[#e0e1df]'>
        <div className="">
            <ActHero />
        </div>
        <div className="">
            <AcvitityContent />
        </div>
    </div>
  )
}

export default Activity