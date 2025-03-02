import React from 'react'

const AllRooms = () => {
  return (
    <div className='bg-white p-4 rounded shadow-xl mt-8'>
        <table className='w-full'>
            <thead>
                <tr className='h-12 border-b border-[#4cdd94] text-[#4cdd94]'>
                    <th className='font-semibold'>Room ID</th>
                    <th>Room Code</th>
                    <th>Room Location</th>
                    <th>Status</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default AllRooms