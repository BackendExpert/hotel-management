import React from 'react'

const WhyHotel = () => {
  return (
    <div className="pb-24">
        <div data-aos="zoom-in" className="text-center bg-white p-8 xl:mx-24 mx-8">
            <h1 className="font-semibold tracking-[.5em]">Why Choose JehanKandyHotels?</h1>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <div className="grid xl:grid-cols-4 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Prime Location</h1>
                    <p className="">
                        Situated in the heart of Kandy with stunning views and easy access to major attractions.
                    </p>
                </div>  
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Unparalleled Comfort</h1>
                    <p className="">
                        Modern amenities blended with traditional Sri Lankan charm.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Exceptional Hospitality</h1>
                    <p className="">
                        A dedicated team ensuring a personalized and memorable experience.
                    </p>
                </div>  
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Affordable Luxury</h1>
                    <p className="">
                        Premium services at competitive rates.
                    </p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default WhyHotel