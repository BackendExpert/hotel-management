import React from 'react'

const DefultBtn = ({ type, onclick, btnvlaue}) => {
  return (
    <button 
        type={type}
        onClick={onclick}
        className='py-2 px-4 bg-[#4e5c4a] text-white text-sm'
    >
        {btnvlaue}
    </button>
  )
}

export default DefultBtn