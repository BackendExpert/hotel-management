import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import AdminData from './AdminData';

const AdminDashbaord = () => {


  return (
    <div className='mt-2'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#a4805a]">
                    <BiSolidDashboard className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#a4805a] text-xl pt-1 font-semibold uppercase">Dashboard</h1>
            </div>
        </div>
        
        <div className="">
            <AdminData />
        </div>
        

    </div>
  )
}

export default AdminDashbaord