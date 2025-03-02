import React from 'react'
import secureLocalStorage from "react-secure-storage";

const DashHome = () => {
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')
  return (
    <div>DashHome</div>
  )
}

export default DashHome