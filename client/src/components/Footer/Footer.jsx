import React from 'react'

const Footer = () => {
  return (
    <div className='block relative bg-[url(https://wallpapercave.com/wp/QwX8Meh.jpg)] bg-cover bg-center py-16'>
        <div className='absolute inset-0 bg-[#4e5c4a] opacity-90'></div>

        <div className="relative text-white xl:px-32 md:px-24 px-8">
            <div className="xl:flex">
                <div className="w-1/3">
                    <h1 className="text-white font-semibold uppercase md:tracking-[.5em] text-3xl">
                        MyHotels
                    </h1>
                    <p className="pt-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima et adipisci omnis voluptates atque numquam voluptas animi accusamus labore. Perspiciatis, sit maiores consequuntur in sequi animi tempore ipsa accusamus.
                    </p>
                </div>
                <div className="w-2/3"></div>
            </div>
        </div>
    </div>
  )
}

export default Footer