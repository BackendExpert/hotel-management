import React from 'react'
import { servicedata } from './ServiceData'

const Services = () => {
  return (
    <div className="bg-[#4e5c4a] py-16 xl:px-28 md:px-12 px-4">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
            {
                servicedata.map((service, index) => {
                    return (
                        <div className="" key={index}>
                            <div className="flex">
                                <service.icon className='h-12 w-auto fill-[#a4805a]' />
                                <h1 className="text-white pl-4 pt-1 text-2xl">{service.name}</h1>
                            </div>
                            <div className="">
                                {
                                    service.optionservice.map((serviceopt, optindex) => {
                                        return (
                                            <div className="text-white py-2 ml-4" key={optindex}>
                                                {serviceopt.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services