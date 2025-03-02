import React from 'react'

const DefultInput = ({ type, name, required, placeholder, onChange}) => {
  return (
    <input 
        type={type} 
        name={name}
        required={!!required}
        placeholder={placeholder}
        onChange={onChange}
        className='
              h-12 
              bg-white 
              w-full 
              border-b 
              text-[#4e5c4a]
              border-[#4e5c4a]
              pl-2 
              duration-500 
              focus:outline-none 
              focus:border-[#4e5c4a]
              placeholder:text-[#4e5c4a]
        '
    />
  )
}

export default DefultInput