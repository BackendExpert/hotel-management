import React from 'react'

const Promotions = () => {
  return (
    <div className="bg-white py-8 md:mx-24 mx-4 mt-4" >
        <div className="text-center mb-4">
            <h1 className="tracking-[.5em] text-xl font-semibold">Special Events & Promotions</h1>
        </div>
        <div className="grid xl:grid-cols-4 gap-6 px-8 mt-8">
            <div data-aos="zoom-in" className="text-center">
                <h1 className="font-semibold tracking-[.5em] mb-4">Weekend Buffets</h1>
                <p className="">
                    Unlimited dining experience every Saturday & Sunday.
                </p>
            </div>
            <div data-aos="zoom-in" className="text-center">
                <h1 className="font-semibold tracking-[.5em] mb-4">Wine Wednesdays</h1>
                <p className="">
                    20% off on premium wines.
                </p>
            </div>
            <div data-aos="zoom-in" className="text-center">
                <h1 className="font-semibold tracking-[.5em] mb-4">Happy Hour (6 PM - 8 PM)</h1>
                <p className="">
                    Buy 1 Get 1 Free on selected drinks.
                </p>
            </div>
            <div data-aos="zoom-in" className="text-center">
                <h1 className="font-semibold tracking-[.5em] mb-4">Live Music Nights (Fridays & Saturdays)</h1>
                <p className="">
                    Featuring top artists & DJs.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Promotions