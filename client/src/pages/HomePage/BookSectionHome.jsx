import React, { useState } from 'react'
import { FaRegCalendar, FaUsers } from "react-icons/fa";

const BookSectionHome = () => {
    const today = new Date().toISOString().split('T')[0]; 
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]; 

    const [bookingData, setBookingData] = useState({
        checkin: today,
        checkout: tomorrow,
        guests: 1,
        children: 0,
        rooms: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
    <div className="">
        <div className='xl:block hidden relative xl:mx-40 bg-white p-16 xl:-mt-20 z-10 mb-16 rounded shadow px-20'>
            <form action="" method="post">
                <div className="grid grid-cols-4 gap-4">
                    <div className="">
                        <div className="flex">
                            <FaRegCalendar className='h-8 w-auto fill-[#a4805a]'/>
                            <div className="ml-4">
                                <h1 className="text-2xl xl:-mt-4 text-[#a4805a]">Check In</h1>
                                <div className="">
                                    <input 
                                        type="date" 
                                        name="checkin"
                                        value={bookingData.checkin}
                                        min={today}
                                        onChange={handleChange}
                                        className='border-b border-[#a4805a] w-48 h-12'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex">
                            <FaRegCalendar className='h-8 w-auto fill-[#a4805a]'/>
                            <div className="ml-4">
                                <h1 className="text-2xl xl:-mt-4 text-[#a4805a]">Check Out</h1>
                                <div className="">
                                    <input 
                                        type="date" 
                                        name="checkout"
                                        value={bookingData.checkout}
                                        min={bookingData.checkin}
                                        onChange={handleChange}
                                        className='border-b border-[#a4805a] w-48 h-12'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="flex">
                            <FaUsers className='h-8 w-auto fill-[#a4805a]'/>
                            <div className="ml-4">
                                <h1 className="text-2xl xl:-mt-4 text-[#a4805a]">Guests</h1>
                                
                                <div className="flex justify-between px-2 text-[#a4805a]">
                                    <p className="text-sm">Adults</p>
                                    <p className="text-sm">Children</p>
                                    <p className="text-sm">Rooms</p>
                                </div>

                                <div className="flex">
                                        <input 
                                            type="number" 
                                            name="guests" 
                                            value={bookingData.guests} 
                                            min="1" 
                                            onChange={handleChange}
                                            className='border-b border-[#a4805a] w-20 h-12 text-center'
                                        />

                                        <input 
                                            type="number" 
                                            name="children" 
                                            value={bookingData.children} 
                                            min="0" 
                                            onChange={handleChange}
                                            className='border-b border-[#a4805a] w-20 h-12 text-center'
                                        />

                                        <input 
                                            type="number" 
                                            name="rooms" 
                                            value={bookingData.rooms} 
                                            min="1" 
                                            onChange={handleChange}
                                            className='border-b border-[#a4805a] w-20 h-12 text-center'
                                        />
                                    </div>
                            </div>
                        </div>


                    </div>
                    <div className="">
                        <button className='bg-[#4e5c4a] text-white py-2 px-8'>
                            Check Availability
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>
  )
}

export default BookSectionHome