import React from 'react'

const LoginInput = ({ type, name, value, required, placeholder, onChange}) => {
  return (
    <input 
        type={type} 
        name={name}
        value={value}
        required={!!required}
        className='
            h-12 w-full
            rounded pl-2
            mt-2
            bg-[#e0e1df]
            border-2 border-[#4e5c4a]
        '
        placeholder={placeholder}
        onChange={onChange}
    />
  )
}

export default LoginInput