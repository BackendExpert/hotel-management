import React from 'react'
import AdminBookingChart from '../../components/Charts/AdminBookingChart'

const LatestBookingMonthly = () => {
  return (
    <div className='mt-8'>
        <div className="xl:flex justify-between">
            <div className="w-full mr-2 bg-white p-4 rounded shadow-md">
                <table className='w-full'>
                    <thead>
                        <tr className='h-12 border-b border-[#59bdff] text-[#59bdff] '>
                            <th className='font-semibold xl:table-cell hidden'>Booking ID</th>
                            <th className='xl:table-cell hidden'>Room ID</th>
                            <th className='xl:table-cell hidden'>Check-In</th>
                            <th className='xl:table-cell hidden'>Check-Out</th>
                            <th className='xl:hidden table-cell'>
                                Latest Boooking Data
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="md:block hidden w-full ml-2 bg-white p-4 rounded shadow-md">
                <AdminBookingChart />
            </div>
        </div>
    </div>
  )
}

export default LatestBookingMonthly