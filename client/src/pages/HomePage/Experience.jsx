import React from 'react'
import { experiencedata } from './ExperienceData'
import { Link } from 'react-router-dom'


const Experience = () => {
  return (
    <div className="xl:py-8">
        <div data-aos="zoom-in" className="text-center">
            <h1 className="uppercase font-semibold text-[#4e5c4a]">just more than hotel booking</h1>
            <h1 className="text-3xl text-gray-500 mt-4">Impressive Experience with MyHotels</h1>
        </div>

        <div className="xl:px-28 md:px-10 px-4">
            <div className="grid xl:grid-cols-3 gap-4 mt-16">
                {
                    experiencedata.map((data, index) => {
                        return (
                            <div data-aos="zoom-in" className="bg-white rounded shadow-lg" key={index}>
                                <div className="block relative bg-cover bg-center p-4 h-80" style={{ backgroundImage: `url(${data.img})` }}>
                                    <div className='absolute inset-0 bg-black opacity-40'></div>
                                    <div className="mt-4">
                                        <span className="relative bg-white p-4 mt-2 rounded">
                                            $ {data.price} / Night
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="uppercase text-[#4e5c4a] tracking-[.25em] text-sm font-semibold">{data.category}</p>
                                    <h1 className="text-2xl text-[#a4805a]">{data.name}</h1>

                                    <p className="pt-4 text-gray-500">
                                        {data.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div data-aos="zoom-in" className="mt-4">
                <center>
                    <Link to={'/local-activities'}>
                        <button className='bg-[#4e5c4a] text-white py-2 px-8'>
                            View More Outdoor Activities
                        </button>
                    </Link>
                </center>
            </div>            
        </div>
    </div>
  )
}

export default Experience