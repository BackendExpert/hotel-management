import React from 'react'
import { FaBed } from "react-icons/fa6";
import RoomAvailability from '../Dashboard/RoomAvailability';
import AllRooms from './AllRooms';

const ManageRooms = () => {
  return (
    <div className='mt-4 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#a4805a]">
                    <FaBed className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#a4805a] text-xl pt-1 font-semibold uppercase">Room Management</h1>
            </div>
        </div>
        <div className="mt-4">
            <a href="/Dashboard/add-room">
                <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                    Add New Room
                </button>
            </a>
        </div>
        <div className="">
            <RoomAvailability />
        </div>
        <div className="">
            <AllRooms />
        </div>             
    </div>
  )
}

export default ManageRooms