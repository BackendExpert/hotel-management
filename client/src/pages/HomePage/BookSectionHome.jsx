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

        setBookingData(prevState => {
            let newState = { ...prevState, [name]: value };

            if (name === "checkin") {
                const checkinDate = new Date(value);
                const nextDay = new Date(checkinDate);
                nextDay.setDate(checkinDate.getDate() + 1);
                newState.checkout = nextDay.toISOString().split('T')[0]; 
            }

            return newState;
        });
    };

  return (
    <div className='relative xl:mx-40 bg-white p-16 xl:-mt-20 z-10 mb-16 rounded shadow px-20'>
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
                                    min={tomorrow}
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
                            <p className="">11/25/2024</p>
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
  )
}

export default BookSectionHome