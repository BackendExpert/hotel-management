import React from 'react'
import { FaBookmark } from "react-icons/fa6";

const RoomAvailability = () => {
    const roomsavaila = [
        {
            id: 1,
            name: 'Single Room',
            onevalue: 5,
            twovalue: 8,
            icon: FaBookmark
        },

        {
            id: 2,
            name: 'Double Room',
            onevalue: 5,
            twovalue: 8,
            icon: FaBookmark
        },

        {
            id: 3,
            name: 'Family Room',
            onevalue: 3,
            twovalue: 6,
            icon: FaBookmark
        },

        {
            id: 4,
            name: 'Deluxe Double Room',
            onevalue: 2,
            twovalue: 5,
            icon: FaBookmark
        },
        
        {
            id: 5,
            name: 'Executive Suites',
            onevalue: 1,
            twovalue: 3,
            icon: FaBookmark
        },

        {
            id: 6,
            name: 'Presidential Suite',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark
        },

        {
            id: 7,
            name: 'Honeymoon Suite',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark
        },

        {
            id: 8,
            name: 'Royal Villa',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark
        }
    ]
  return (
    <div className='mt-4'>
        <div className="bg-white rounded-md shadow-xl p-4">
            <h1 className="text-xl text-[#4e5c4a] font-semibold">Room Availability</h1>

            <div className="py-4">
                {
                    roomsavaila.map((room, index) => {
                        return (
                            <div className="" key={index}>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RoomAvailability