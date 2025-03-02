import React from 'react'
import { FaBookmark } from "react-icons/fa6";

const RoomAvailability = () => {
    const roomsavaila = [
        {
            id: 1,
            name: 'Single Room',
            onevalue: 5,
            twovalue: 8,
            icon: FaBookmark,
            activecolor: 'bg-[#59bdff]'
        },

        {
            id: 2,
            name: 'Double Room',
            onevalue: 5,
            twovalue: 8,
            icon: FaBookmark,
            activecolor: 'bg-[#4cdd94]'
        },

        {
            id: 3,
            name: 'Family Room',
            onevalue: 3,
            twovalue: 6,
            icon: FaBookmark,
            activecolor: 'bg-[#fdbf6a]'
        },

        {
            id: 4,
            name: 'Deluxe Double Room',
            onevalue: 2,
            twovalue: 5,
            icon: FaBookmark,
            activecolor: 'bg-[#ff7e60]'
        },
        
        {
            id: 5,
            name: 'Executive Suites',
            onevalue: 1,
            twovalue: 3,
            icon: FaBookmark,
            activecolor: 'bg-[#ff7e60]'
        },

        {
            id: 6,
            name: 'Presidential Suite',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark,
            activecolor: 'bg-[#fdbf6a]'
        },

        {
            id: 7,
            name: 'Honeymoon Suite',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark,
            activecolor: 'bg-[#4cdd94]'
        },

        {
            id: 8,
            name: 'Royal Villa',
            onevalue: 1,
            twovalue: 2,
            icon: FaBookmark,
            activecolor: 'bg-[#59bdff]'
        }
    ]
  return (
    <div className='mt-4'>
        <div className="pt-4">
            <h1 className="text-xl text-[#4e5c4a] font-semibold">Room Availability</h1>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 pt-4">
                {
                    roomsavaila.map((room, index) => {
                        return (
                            <div key={index} className="bg-white p-3 rounded-md shadow-xl">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <room.icon className="text-blue-500 text-lg" />
                                  <span className="text-gray-800 font-medium">{room.name}</span>
                                </div>
                                <span className="text-gray-600 text-sm">
                                  {room.onevalue} / {room.twovalue} occupied
                                </span>
                              </div>
              

                              <div className="w-full bg-gray-200 h-3 rounded-full relative flex">
                                {Array.from({ length: room.twovalue }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-3 flex-1 mx-0.5 rounded ${
                                      i < room.onevalue ? room.activecolor : "bg-gray-300"
                                    }`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RoomAvailability