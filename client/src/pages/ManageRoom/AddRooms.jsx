import React, { useState } from 'react'
import { MdAddCircle } from "react-icons/md";
import DashInput from '../../components/Form/DashInput';

const AddRooms = () => {
    const [roomdata, setroomdata] = useState({
        roomsize: '',
        guests: '',
        beds: '',
        bathrooms: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setroomdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };
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

        <form method="post">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="w-full my-2">
                    <p className="">Room Size</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'roomsize'}
                            value={roomdata.roomsize}
                            placeholder={"Room Size"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="w-full my-2">
                    <p className="">Room Size</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'roomsize'}
                            value={roomdata.roomsize}
                            placeholder={"Room Size"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="w-full my-2">
                    <p className="">Room Size</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'roomsize'}
                            value={roomdata.roomsize}
                            placeholder={"Room Size"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="w-full my-2">
                    <p className="">Room Size</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'roomsize'}
                            value={roomdata.roomsize}
                            placeholder={"Room Size"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                
                
            </div>
        </form>
    </div>
  )
}

export default AddRooms