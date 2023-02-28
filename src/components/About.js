import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { aboutData, cardData } from '../data'
import Arrow from './Arrow'

const About = () => {
    const { order, title, subtitle, arrowtext, image, image1, image2 } = aboutData
    return (
        <div className='about-container'>
            <div className='about-div'>
                <p className='description' data-aos="fade-up" data-aos-delay='200'>{order}</p>
                <h1 className='title pr-5' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                <p className='subtitle pr-10 py-10' data-aos="fade-up" data-aos-delay='400'>{subtitle}</p>
                {/* <Arrow arrowtext={arrowtext} data_aos="fade-up" data_aos_delay='400' /> */}
                <div className="flex items-center gap-5 description" data-aos='fade-up' data-aos-delay='500'>
                    {arrowtext} <BsArrowRight />
                </div>
                <div className='title'>
                    {
                        cardData.map((item, index) => {
                            return (
                                <div key={index} data-aos="fade-up" data-aos-delay={index + 1 * 200}>
                                    <h1 className='title'>{item.title}</h1>
                                    <p className='subtitle'>{item.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='container1 about-img' >
                <div className='flex flex-col bg-gray-50 ml-12 lg:ml-20 mt-5 lg:mt-10 rounded-tl-xl gap-6 items-center' data-aos="fade-up" data-aos-delay='100'>
                    <div className='bg-gray-100 ml-auto mt-5 pl-2 h-[50px] flex flex-row items-center rounded-l-lg gap-4 w-[97%]'>
                        <div className='bg-red-400 circle-fill'></div>
                        <div className='bg-yellow-400 circle-fill'></div>
                        <div className='bg-green-400 circle-fill'></div>
                    </div>
                    <img src={image} className='mr-24 lg:mr-40 w-[80%]' data-aos="zoom-in-left" data-aos-delay='150' />
                    <img src={image1} className='w-[80%]'/>
                    <img src={image2} className='w-[80%]'/>
                </div>
            </div>
        </div>
    )
}

export default About;