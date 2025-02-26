import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import DefultBtn from '../Buttons/DefultBtn';
import { navdata } from './NavData';
import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";


const Nav = () => {
    const [opennav, setopennav] = useState(false)

    const toggleopenmenu = () => {
        setopennav(!opennav)
    }
  return (
    <div className='py-6 xl:px-32 px-8 w-full bg-white shadow-md'>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#4e5c4a] uppercase md:tracking-[.5em] text-black text-3xl">
            MyHotels
          </h1>
          <div className="flex justify-center mt-1">
            <div className="flex md:gap-4 gap-2">
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
              <FaStar className='h-2 w-auto fill-[#a4805a]' />
            </div>
          </div>
        </div>
        <div className="xl:hidden block mt-1">
            {
                !opennav ? 
                    <RiMenu4Fill className='h-10 w-auto fill-[#4e5c4a]' onClick={toggleopenmenu}/>
                :
                    <RiCloseLargeFill className='h-10 w-auto fill-[#4e5c4a]' onClick={toggleopenmenu}/>
            }
        </div>
        <div className="xl:block hidden">
            <div className="flex">
                <div className="flex mr-8">
                    {
                        navdata.map((data, index) => {
                            return (
                                <div className="mx-8 uppercase text-lg mt-2" key={index}>
                                    <h1 className="">{data.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-1">
                    <DefultBtn 
                        type={'button'}
                        btnvlaue={'Book Now'}
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
