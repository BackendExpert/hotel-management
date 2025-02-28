import React from 'react'

const Event = () => {
  return (
    <div className="pb-24">
        <div className="md:mx-24 mx-4 mt-16">
            <div className="xl:flex">
                <div data-aos="zoom-in" className="py-60 w-full block relative bg-[url(https://wallpapercave.com/wp/wp14536089.jpg)] bg-cover bg-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className="relative text-white text-2xl font-bold text-center">
                        <h1 className="uppercase md:text-3xl font-semibold tracking-[.5em]">
                            Business & Event Services
                        </h1>
                    </div>
                </div>
                <div data-aos="zoom-in" className="w-full bg-white flex flex-col items-center justify-center text-center p-8">
                    <p className="tracking-[.5em] text-xl pb-4">Business & Event Services</p>
                    <p className="max-w-2xl">
                        For corporate travelers and event organizers, we provide excellent facilities for meetings, conferences, and special occasions.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white py-8 md:mx-24 mx-4 mt-4" data-aos="zoom-in">
            <div className="grid xl:grid-cols-3 gap-6 px-8 mt-8">
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Conference & Meeting Rooms</h1>
                    <p className="">
                        High-tech spaces for corporate events.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Banquet Halls</h1>
                    <p className="">
                        Ideal for weddings, receptions, and private parties.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold tracking-[.5em] mb-4">Business Center</h1>
                    <p className="">
                        Equipped with high-speed internet, printing, and other office essentials.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event