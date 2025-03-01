import React, { useState } from 'react'
import axios from 'axios'

const StaffLogin = () => {
    const [stafflogin, setstafflogin] = useState({
        staffid: '',
        email: '',
        passworkd: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesubmit = async (e) => {
        e.preventDefault()

        try{    
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/login', stafflogin)
            if(res.data.Status === "Success"){
                navigate('/Dashboard/Home')                    
                localStorage.setItem("login", res.data.Token)
                secureLocalStorage.setItem("loginE", res.data.Result.email)
                secureLocalStorage.setItem("loginU", res.data.Result.username)
                secureLocalStorage.setItem("loginR", res.data.Result.role)
                localStorage.setItem("dashmenuID", 1)
                window.location.reload() 
            }
            else{
                alert(res.data.Error)
            }
        }   
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='pt-24 xl:px-24 md:px-10 px-8 bg-[#e0e1df]'>
        <div className="py-16">
            hi all
        </div>
    </div>
  )
}

export default StaffLogin