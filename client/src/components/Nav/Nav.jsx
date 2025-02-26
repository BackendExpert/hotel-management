import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import DefultBtn from '../Buttons/DefultBtn';
import { navdata } from './NavData';
import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


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
      <div className={`absolute bg-[#4e5c4a] right-4 left-4 top-24 py-4 px-8 mt-1 rounded shadow-xl transition-all duration-300 transform 
        ${opennav ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>

            <div className="">
                {
                    navdata.map((data, index) => {
                        return (
                            <div className="text-white" key={index}>
                                { data.submenu.length > 0 ? (
                                    <h1 className="text-xl uppercase font-semibold">{data.name}</h1>
                                ) : (
                                    <h1 className="text-xl uppercase font-semibold">
                                        <Link to={data.link}>
                                            {data.name}
                                        </Link>
                                    </h1>
                                )}
                                
                                <div className="my-4 ml-5">
                                    {
                                        data.submenu.map((submenudata, submenuindex) => {
                                            return(
                                                <div className="my-2" key={submenuindex}>
                                                    <Link to={submenudata.link}>
                                                        <h1 className="">{submenudata.name}</h1>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           
        
      </div>
    </div>
  );
}

export default Nav;
