import React from 'react'

const FoodHotel = () => {
  return (
    <div className="pb-24">
        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div data-aos="zoom-in" className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp13371495.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Dining & Culinary Delights
                        </h1>
                    </div>
                </div>
                <div data-aos="zoom-in" className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Dining & Culinary Delights</p>
                    <p className="max-w-2xl">
                        Indulge in a delightful culinary journey at our in-house restaurants, where our expert chefs serve both international and authentic Sri Lankan cuisine.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <div className="grid xl:grid-cols-4 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Buffet Breakfast, Lunch & Dinner</h1>
                    <p className="">
                        A wide selection of gourmet dishes.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Coffee Shop & Café</h1>
                    <p className="">
                        Freshly brewed coffee and light snacks available throughout the day.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Bar & Lounge</h1>
                    <p className="">
                        A sophisticated space to unwind with a selection of fine wines, cocktails, and mocktails.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">24/7 In-Room Dining</h1>
                    <p className="">
                        Enjoy a meal from the comfort of your room, anytime.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FoodHotel