import React from 'react'
import secureLocalStorage from "react-secure-storage";
import AdminDashbaord from './AdminDashbaord';
import StaffDashboard from './StaffDashboard';

const DashHome = () => {
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')
  return (
    <div>
        {
            (() => {
                if(RoleUser === "admin"){
                    return ( <AdminDashbaord /> )
                }
                else if(RoleUser === "staff"){
                    return ( <StaffDashboard /> )
                }
            })()
        }
    </div>
  )
}

export default DashHome