import React, { useState } from 'react'
import DefultInput from '../../components/Form/DefultInput';
import DefultBtn from '../../components/Buttons/DefultBtn';
import { staydata } from './StayData';
import { Link } from 'react-router-dom';

const StayConnected = () => {
    const [subscribenews, setsubscribenews] = useState({
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsubscribenews((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

  return (
    <div className="xl:px-28 md:px-10 px-4">
        <div className="md:flex py-16">
            <div className="md:w-1/2">
                <h1 className="text-3xl text-[#4e5c4a]">Stay Connected</h1>

                <div className="grid grid-cols-3 gap-6 mt-8">

                        {
                            staydata.map((stay, index) => {
                                return (
                                    <div data-aos="zoom-in" className="" key={index}>
                                        <div className="flex">
                                            <stay.icon className='h-8 w-auto fill-[#a4805a]' />
                                            <Link to={stay.link}>
                                                <p className="pl-2 text-lg text-[#4e5c4a] font-semibold">{stay.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }

                </div>
            </div>
            <div data-aos="zoom-in" className="md:w-1/2 xl:px-16 px-4 bg-white py-8 rounded shadow-xl">
                <form method="post">
                    <h1 className="text-[#4e5c4a] font-semibold text-xl">Subscribe to NEWS Latter</h1>
                    <DefultInput 
                        type={'email'}
                        name={'email'}
                        value={subscribenews.email}
                        onChange={handleInputChange}
                        required={true}
                        placeholder={"Email Address"}
                    />

                    <div className="mt-4">
                        <button type='submit' className='bg-[#4e5c4a] text-white py-2 px-8'>
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default StayConnected