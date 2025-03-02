import React from 'react'
import CountUp from 'react-countup';
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { FaBookmark, FaPeopleGroup } from "react-icons/fa6";

const AdminData = () => {
    const admindata = [
        {
            id: 1,
            name: 'Total Rooms',
            icon: IoBedSharp,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#59bdff] to-[#59d1ff]'
        },

        {
            id: 2,
            name: 'Total Guests',
            icon: FaPeopleGroup,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#4cdd94] to-[#55f397]'
        },

        {
            id: 3,
            name: 'Total Bookings',
            icon: FaBookmark,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#fdbf6a] to-[#fedb7f]'
        },

        {
            id: 4,
            name: 'Total Staff',
            icon: FaUsers,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#ff7e60] to-[#ffc27c]'
        },

    ]
  return (
    <div>
        <div className="mt-4">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className={`${data.bgstyle} text-white rounded-md shadow-xl py-8 px-4`} key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-2xl">                                            
                                            <CountUp end={data.value} duration={5}/> + 
                                        </h1>
                                        <h1 className="font-semibold">{data.name}</h1>
                                    </div>

                                    <div className="">
                                        <data.icon className='h-12 w-auto'/>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default AdminData