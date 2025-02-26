import React from 'react';
import { FaStar } from "react-icons/fa6";
import DefultBtn from '../Buttons/DefultBtn';
import { navdata } from './NavData';

const Nav = () => {
  return (
    <div className='py-6 md:px-32 px-8 w-full bg-white shadow-md'>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#4e5c4a] uppercase tracking-[.5em] text-black text-3xl">
            MyHotels
          </h1>
          <div className="flex justify-center mt-1">
            <div className="flex gap-4">
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
        <div className="">
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
