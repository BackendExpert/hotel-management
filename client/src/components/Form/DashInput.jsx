import React from 'react'

const DashInput = ({ type, name, value, placeholder, onChange, required }) => {
  return (
    <input
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
            w-full
            h-12
            rounded
            pl-2
            duration-500
            focus:outline-none focus:border-slate-400
            focus:shadow
            hover:border-slate-300
        '
    />
  )
}

export default DashInput