import React from 'react'
import { footerdata } from './FooterData'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa";

const Footer = () => {
    const getcurrentyear = new Date().getFullYear()
  return (
    <div className="">
        <div className='block relative bg-[url(https://wallpapercave.com/wp/QwX8Meh.jpg)] bg-cover bg-center py-16'>
            <div className='absolute inset-0 bg-[#4e5c4a] opacity-90'></div>

            <div className="relative text-white xl:px-32 md:px-24 px-8">
                <div className="xl:flex">
                    <div data-aos="zoom-in" className="xl:w-1/3">
                        <h1 className="text-white font-semibold uppercase md:tracking-[.5em] text-3xl xl:text-left text-center">
                            MyHotels
                        </h1>
                        <p className="pt-4 xl:text-left text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus laudantium sequi odio corrupti expedita optio saepe doloremque ad voluptatibus totam eveniet, ullam repellat sed itaque veritatis amet ab aperiam harum?
                        </p>
                    </div>
                    <div className="xl:w-2/3 xl:ml-8 md:mt-0 mt-8">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 xl:mt-0 md:mt-8">
                            {
                                footerdata.map((data, index) => {
                                    return (
                                        <div data-aos="zoom-in" className="" key={index}>
                                            <h1 className="font-semibold text-lg uppercase tracking-[.5em]">{data.name}</h1>
                                        
                                            <div className="mt-4">
                                                {data.submenu.map((subdata, subindex) => {
                                                    return (
                                                        <div className="my-4 duration-500 hover:text-[#a4805a] hover:pl-2" key={subindex}>
                                                            <h1 className="">
                                                                <Link to={subdata.link}>
                                                                    {subdata.name}
                                                                </Link>
                                                            </h1>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div data-aos="zoom-in" className="">
                                <h1 className="font-semibold text-lg uppercase tracking-[.5em]">Reach Out</h1>

                                <div className="mt-4">
                                    <h1 className="flex my-4">
                                        <FaLocationDot className='h-5 w-auto'/>
                                        <span className='pl-2'>88, Crosses Street, XYZ, 123456</span>
                                    </h1>

                                    <h1 className="flex my-4">
                                        <FaEnvelopeOpen className='h-5 w-auto'/>
                                        <span className='pl-2'>support.myhotel@exmple.com</span>
                                    </h1>

                                    
                                    <h1 className="flex my-4">
                                        <FaPhone className='h-5 w-auto'/>
                                        <span className='pl-2'>+94 71xxxxxxx</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#4e5c4a] p-8 text-white">
            Copyright &copy; {getcurrentyear} MyHotel | All Right Reserved | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" className='font-semibold text-[#a4805a]' target='_blank'>jehankandy</a>
        </div>
    </div>
  )
}

export default Footer