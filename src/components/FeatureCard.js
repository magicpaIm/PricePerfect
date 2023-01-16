import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const FeatureCard = ({ featurecardData, index, data_aos, data_aos_delay}) => {
    const { title, description, price, priceplan } = featurecardData
    return (
        <div className={`flex flex-col  rounded-xl lg:w-[30%] px-5 lg:px-10 py-10 ${index == 0 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`} data-aos={data_aos} data-aos-delay={data_aos_delay}>
            <div className={`${index == 0 ? "bg-blue-500" : "bg-gray-300"} rounded-full px-4 py-2  text-2xl w-fit`}>
                <p className='w-full'>{title}</p>
            </div>
            <div className='py-10'>
                {
                    description.map((des) => {
                        return (
                            <div className='flex flex-row gap-5 items-center py-1'>
                                <BsFillCheckCircleFill className={`h-[20px] w-[20px] ${index == 0 ? "text-white ": "text-gray-800" }`}/>
                                <p className='text-xl'>{des}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex inline-flex  py-5'>
                <span className=' text-5xl lg:text-6xl font-bold'>{price}</span><span className='self-end text-2xl lg:text-3xl font-medium'>{priceplan}</span>
            </div>
        </div>
    )
}

export default FeatureCard;