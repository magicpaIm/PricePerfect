import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { benifitData, benifitcardData } from '../data'

const Benifit = () => {
    const { order, title, subtitle, arrowtext, bgimage, aniimage } = benifitData
    return (
        <div className='about-container flex-col-reverse lg:flex-row pb-20'>

            <div className='container1 about-img' data-aos="zoom-in"  data-aos-delay='50' >
                <div className='benifitbg mt-16 mr-auto h-[500px] lg:h-[700px] w-[90%] bg-center bg-cover rounded-tr-xl' data-aos="fade-up" data-aos-delay='100'>
                    <img src={aniimage} className='ml-5 pt-20' data-aos="zoom-in-right" data-aos-delay='150' />
                </div>
            </div>
            <div className='about-div lg:pl-20 pt-5'>
                <p className='description' data-aos="fade-up" data-aos-delay='200'>{order}</p>
                <h1 className='title ' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                <p className='subtitle py-10' data-aos="fade-up" data-aos-delay='400'>{subtitle}</p>
                <div className="flex items-center gap-5 description" data-aos='fade-up' data-aos-delay='500'>
                    {arrowtext} <BsArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Benifit;