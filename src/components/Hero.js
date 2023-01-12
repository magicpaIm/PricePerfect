import React from 'react'

//import hero data
import { heroData } from '../data'
import Button from './Button'

const Hero = () => {
    //destructure here data
    const { order, titleUp, titleDown, subtitle, btnText, image, image1, image2 } = heroData
    return (
        <div className="px-5 w-full">
            <div className="container1" data-aos="fade-up" data-aos-delay='200'>

                <div className='w-full text-center justify-center items-center '>
                    <p className='description pt-20' >{order}</p>
                    <h1 className='title' data-aos="fade-up" data-aos-delay='300'>{titleUp}</h1>
                    <h1 className='title' data-aos="fade-up" data-aos-delay='400' data-aos-duration='1000'>{titleDown}</h1>
                    <p className='subtitle mx-auto' data-aos="fade-up" data-aos-delay='500'>{subtitle}</p>
                    <div className='flex flex-row w-full justify-center items-center pb-10'>
                        <div className='flex flex-row items-center bg-white rounded-xl px-2 py-2 gap-48' data-aos="fade-up" data-aos-delay='700'>
                            <p className='text-gray-300 ml-5'>input your email address</p>
                            <Button btnText={btnText} />
                        </div>
                    </div>
                    <div className="flex flex-col heroBg mx-auto h-[500px] w-[1100px] bg-center bg-no-repeat bg-cover" data-aos="zoom-in-right" data-aos-delay='800'>
                        <img src={image1} className='h-[170px] w-[380px]' data-aos="zoom-in-left" data-aos-delay='700'/>
                        <img src={image2} className='h-[400px] w-[500px] ml-auto pl-10 ' data-aos="zoom-in-right" data-aos-delay='1300'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero