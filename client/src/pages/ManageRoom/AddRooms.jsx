import React from 'react'
import { MdAddCircle } from "react-icons/md";

const AddRooms = () => {
  return (
    <div className='mt-4 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#a4805a]">
                    <MdAddCircle className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#a4805a] text-xl pt-1 font-semibold uppercase">Add New Room</h1>
            </div>
        </div>
    </div>
  )
}

export default AddRooms