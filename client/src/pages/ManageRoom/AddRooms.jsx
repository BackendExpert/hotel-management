import React, { useState } from 'react'
import { MdAddCircle } from "react-icons/md";
import DashInput from '../../components/Form/DashInput';
import DashTextArea from '../../components/Form/DashTextArea';
import DashImgeInput from '../../components/Form/DashImgeInput';

const AddRooms = () => {
    const [roomdata, setroomdata] = useState({
        roomsize: '',
        guests: '',
        beds: '',
        bathrooms: '',
        desc: '',
        includes: '',
        roomtype: '',
        img: '',
    })

    const roomtpyes = [
        { name: 'Single Room', value: 'single-room'},
        { name: 'Double Room', value: 'double-room'},
        { name: 'Family Room', value: 'family-room'},
        { name: 'Deluxe Double Room', value: 'deluxe-double-room'},
        { name: 'Executive Suites', value: 'executive-suites'},
        { name: 'Presidential Suites', value: 'presidential-suites'},
        { name: 'Honeymoon Suites', value: 'honeymoon-suites'},
        { name: 'Royal Villa', value: 'royal-villa'},,
    ]

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
            <div className="grid md:grid-cols-4 gap-2">
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
                    <p className="">Guests</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'guests'}
                            value={roomdata.guests}
                            placeholder={"Guests"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="w-full my-2">
                    <p className="">Beds</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'beds'}
                            value={roomdata.beds}
                            placeholder={"Beds"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="w-full my-2">
                    <p className="">Bathrooms</p>
                    <div className="mt-2">
                        <DashInput 
                            type={'number'}
                            name={'desc'}
                            value={roomdata.desc}
                            placeholder={"Bathrooms"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>               
            </div>

            <div className="">
                <div className="w-full my-2">
                    <p className="">Room Cover Image</p>
                    <div className="mt-2">
                        <DashImgeInput 
                            name={'img'}
                            accept={'image/*'}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>      
            </div>

            <div className="flex justify-between">
                <div className="w-full mr-2">
                    <div className="w-full my-2">
                        <p className="">Room Description</p>
                        <div className="mt-2">
                            <DashTextArea 
                                type={'number'}
                                name={'bathrooms'}
                                value={roomdata.bathrooms}
                                placeholder={"Room Description"}
                                required={true}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>      
                </div>



                <div className="w-full ml-2">
                    <div className="w-full my-2">
                        <p className="">Room Includes</p>
                        <div className="mt-2">
                            <DashTextArea 
                                type={'number'}
                                name={'includes'}
                                value={roomdata.includes}
                                placeholder={"Room Includes (use 'enter' to separate Includes)"}
                                required={true}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>      
                </div>
            </div>


        </form>
    </div>
  )
}

export default AddRooms