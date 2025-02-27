import React, { useState } from 'react'
import DefultInput from '../../components/Form/DefultInput';
import DefultBtn from '../../components/Buttons/DefultBtn';

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
    <div className="xl:px-28">
        <div className="flex py-16">
            <div className="w-1/2"></div>
            <div className="w-1/2 xl:px-16 bg-white py-8 rounded shadow-xl">
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