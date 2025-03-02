import React, { useState } from 'react'
import axios from 'axios'
import LoginInput from '../../components/Form/LoginInput';
import DefultBtn from '../../components/Buttons/DefultBtn';
import secureLocalStorage  from 'react-secure-storage'
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {
    const navigate = useNavigate()
    const [stafflogin, setstafflogin] = useState({
        staffid: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setstafflogin((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesubmit = async (e) => {
        e.preventDefault()

        try{    
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', stafflogin)
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
            <h1 className="text-2xl font-semibold text-gray-500">Staff Login</h1>

            <div className="mt-8">
                <div className="xl:w-1/2">
                    <form onSubmit={headlesubmit} method="post">
                        <div className="py-2">
                            <p className="">Staff ID: </p>
                            <LoginInput 
                                type={'text'}
                                placeholder={"Staff ID"}
                                name={'staffid'}
                                value={stafflogin.staffid}
                                required={true}      
                                onChange={handleInputChange}                          
                            />
                        </div>
                        <div className="py-2">
                            <p className="">Staff Email : </p>
                            <LoginInput 
                                type={'email'}
                                placeholder={"Staff Email"}
                                name={'email'}
                                value={stafflogin.email}
                                required={true}      
                                onChange={handleInputChange}                          
                            />
                        </div>
                        <div className="py-2">
                            <p className="">Staff Password: </p>
                            <LoginInput 
                                type={'password'}
                                placeholder={"Staff Password"}
                                name={'password'}
                                value={stafflogin.password}
                                required={true}      
                                onChange={handleInputChange}                          
                            />
                        </div>

                        <div className="mt-2">
                            <DefultBtn 
                                type={'submit'}
                                btnvlaue={'Login as Staff'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default StaffLogin