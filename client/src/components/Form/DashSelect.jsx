import React from 'react'

const DashSelect = ({ name, optons, required, defaultoption, onChange }) => {
  return (
    <select 
        name={name}
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
    >
        <option value="">{defaultoption}</option>
        {
            optons.map((opt, index) => {
                return (
                    <option key={index} value={opt.value}>{opt.name}</option>
                )
            })
        }
    </select>
  )
}

export default DashSelect