import React from 'react'

const DashImgeInput = ({ name, required, onChange, accept }) => {
  return (
    <input 
        type="file"
        name={name}
        accept={accept}
        required={!!required}
        onChange={onChange}
        className='
            w-full
            h-12
            rounded
            pl-2
            duration-500
            bg-white
            focus:outline-none focus:border-slate-400
            focus:shadow
            file:h-full
            file:px-6
            file:bg-[#a4805a]
            file:border-none
            file:text-white
            hover:border-slate-300
        '
    />
  )
}

export default DashImgeInput