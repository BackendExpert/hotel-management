import React from 'react'
import { toprooms } from './ToproomData'

const TopRooms = () => {
    return (
        <div className='py-16 xl:mx-28 md:mx-8 mx-4'>
            <h1 className="uppercase font-semibold text-[#4e5c4a]">Enjoy Stay Experience like a VIP</h1>

            <div className="xl:flex mt-4">
                <div className="w-full">
                    <h1 className="text-4xl font-semibold mb-2">Select your Room</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse dolor iusto ex odit sunt omnis, totam odio alias! Deserunt impedit amet quo quam natus ipsam! Quidem nesciunt natus quae?
                </div>
                <div className="w-full"></div>
            </div>

            <div className="">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    {
                        toprooms.map((room, index) => {
                            return (
                                <div className="bg-white rounded shadow-lg" key={index}>
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
                                    </div>
                                
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default TopRooms