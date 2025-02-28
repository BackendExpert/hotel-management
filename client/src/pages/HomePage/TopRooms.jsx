import React from 'react'
import { toprooms } from './ToproomData'
import { Link } from 'react-router-dom'

const TopRooms = () => {
    return (
        <div className='py-16 xl:mx-28 md:mx-8 mx-4'>
            <h1 data-aos="zoom-in" className="uppercase font-semibold text-[#4e5c4a]">Enjoy Stay Experience like a VIP</h1>

            <div data-aos="zoom-in" className="xl:flex mt-4">
                <div className="w-full">
                    <h1 className="text-4xl font-semibold mb-2">Select your Room</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse dolor iusto ex odit sunt omnis, totam odio alias! Deserunt impedit amet quo quam natus ipsam! Quidem nesciunt natus quae?
                </div>
                <div className="w-full"></div>
            </div>

            <div className="">
                <div className="grid xl:grid-cols-3 gap-4 mt-8">
                    {
                        toprooms.map((room, index) => {
                            return (
                                <div data-aos="zoom-in" className="bg-white rounded shadow-lg" key={index}>
                                    <div className="block relative bg-cover bg-center p-4 h-80" style={{ backgroundImage: `url(${room.image})` }}>
                                        <div className='absolute inset-0 bg-black opacity-40'></div>
                                        <div className="mt-4">
                                            <span className="relative bg-white p-4 mt-2 rounded">
                                                $ {room.pricepernight} / Night
                                            </span>
                                        </div>
                                    </div>

                                    <div className="m-8">
                                        <h1 className="text-2xl text-[#a4805a]">{room.name}</h1>

                                        <div className="flex justify-between mt-4">
                                            {
                                                room.optionsroom.map((optroom, optindex) => {
                                                    return (
                                                        <div className="flex" key={optindex}>
                                                            <optroom.icon className='h-6 w-auto fill-[#a4805a]' />
                                                            {
                                                                optroom.value.endsWith('m') ? 
                                                                    <p className="pl-2">{optroom.value} <sup>2</sup></p>
                                                                :
                                                                    <p className="pl-2">{optroom.value}</p>
                                                            }
                                                            
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="mt-6">
                                            <p className="text-gray-500">{room.desc}</p>
                                        </div>
                                    </div>                                
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-4">
                    <center>
                        <Link>
                            <button className='bg-[#4e5c4a] text-white py-2 px-8'>
                                View More Rooms
                            </button>
                        </Link>
                    </center>
                </div>
            </div>

        </div>
    )
}

export default TopRooms