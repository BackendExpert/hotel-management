import React, { useState } from 'react';

const Nav = () => {

  return (
    <div className='py-4 md:px-32 px-8 w-full bg-white shadow-md'>
        <div className="flex justify-between">
            <div className="flex ">
                <h1 className="logo-title text-black text-3xl">GoBidly</h1>
                <div className="pl-4 text-black">
                    <h1 className="font-semibold">Auction</h1>
                    <p className="">Platform</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav