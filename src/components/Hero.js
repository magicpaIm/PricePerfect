import React from 'react'

//import hero data
import { heroData } from '../data'
import Button from './Button'
const Hero = () => {
    //destructure here data
    const { order, titleUp, titleDown, subtitle, btnText, image } = heroData
    return (
        <div className="px-5 w-full">
            <div className="container1" data-aos="fade-up" data-aos-delay='200'>

                <div className='w-full text-center justify-center items-center '>
                    <p className='w-full text-blue-500 text-lg pt-20 pb-5' >{order}</p>
                    <h1 className='w-full text-6xl font-bold text-gray-800 pb-2' data-aos="fade-up" data-aos-delay='300'>{titleUp}</h1>
                    <h1 className='w-full text-6xl font-bold text-gray-800 pb-2' data-aos="fade-up" data-aos-delay='400' data-aos-duration='1000'>{titleDown}</h1>
                    <p className='text-gray-500 font-medium max-w-sm mx-auto py-5' data-aos="fade-up" data-aos-delay='500'>{subtitle}</p>
                    <div className='flex flex-row w-full justify-center items-center pb-10'>
                        <div className='flex flex-row items-center bg-white rounded-xl px-2 py-2 gap-48' data-aos="fade-up" data-aos-delay='700'>
                            <p className='text-gray-300 ml-5'>input your email address</p>
                            <Button btnText={btnText} />
                        </div>
                    </div>
                    <div className="heroBg mx-auto h-[500px] w-[1100px] bg-center bg-no-repeat bg-cover" data-aos="zoom-in-right" data-aos-delay='800'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero