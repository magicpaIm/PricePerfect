import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { TrustedmonialData } from '../data';
import TrustedmonialSlider from './TrustedmonialSlider';

const Trustedmonial = () => {
    const { order, title, subtitle, arrowtext } = TrustedmonialData
    return (
        <div className='bg-slate-900 flex flex-col py-10 w-full'>
            <div className='flex flex-col lg:flex-row gap-5 px-10' data-aos='fade-up' data-aos-offset='300'>
                <div className='w-full lg:w-1/2 lg:p-10'>
                    <p className='description' data-aos="fade-up" data-aos-delay='200'>{order}</p>
                    <h1 className='title text-2xl lg:text-5xl text-white pr-10 ' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                </div>
                <div className='w-full lg:w-1/2 lg:p-10'>
                    <p className='subtitle lg:pr-10 lg:pt-10' data-aos="fade-up" data-aos-delay='400'>{subtitle}</p>
                    <div className="flex items-center gap-5 description" data-aos='fade-up' data-aos-delay='400'>
                        {arrowtext} <BsArrowRight />
                    </div>

                </div>
            </div>
            <TrustedmonialSlider />
        </div>
    )
}

export default Trustedmonial;