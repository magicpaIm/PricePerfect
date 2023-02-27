import React from 'react'

//import hero data
import { heroData } from '../data'
import Button from './Button'

const Hero = () => {
    //destructure hero data
    const { order, titleUp, titleDown, subtitle, btnText, image, image1, image2 } = heroData
    return (
        <div className="px-5 w-full">
            <div className="container1" data-aos="fade-up" data-aos-delay='200'>
                <div className='w-full text-center justify-center items-center '>
                    <p className='description pt-20' >{order}</p>
                    <h1 className='title' data-aos="fade-up" data-aos-delay='300'>{titleUp}</h1>
                    <h1 className='title' data-aos="fade-up" data-aos-delay='500' data-aos-duration='1000'>{titleDown}</h1>
                    <p className='subtitle mx-auto' data-aos="fade-up" data-aos-delay='600'>{subtitle}</p>
                    <div className='flex flex-row w-full justify-center items-center pb-10'>
                            <Button btnText={btnText} />
                        {/* <div className='flex flex-row items-center bg-white rounded-xl px-2 py-2 gap-5 lg:gap-48' data-aos="fade-up" data-aos-delay='700'>
                        </div> */}
                    </div>
                    <div className="flex flex-col heroBg mx-auto w-[300px] h-[200px] lg:h-[500px] lg:w-[1100px] bg-center bg-no-repeat bg-cover" data-aos="fade-up" data-aos-delay='900'>
                        <img src={image1} className='mt-8 lg:mt-1 w-[100px] h-[50px] lg:h-[170px] lg:w-[380px]' data-aos="zoom-in-left" data-aos-delay='800'/>
                        <img src={image2} className='mb-10 lg:mb-5 w-[150px] h-[100px] lg:h-[400px] lg:w-[500px] ml-auto pl-5 lg:pl-8 ' data-aos="zoom-in-right" data-aos-delay='800'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero