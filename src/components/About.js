import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { aboutData, cardData } from '../data'
import Arrow from './Arrow'

const About = () => {
    const { order, title, subtitle, arrowtext, image, image1, image2 } = aboutData
    return (
        <div className='flex flex-row  px-16 pt-28 items-center'>
            <div className='flex flex-col  items-center w-1/2'>
                <p className='description' data-aos="fade-up" data-aos-delay='200'>{order}</p>
                <h1 className='title pr-5' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                <p className='subtitle pr-10 py-10' data-aos="fade-up" data-aos-delay='400'>{subtitle}</p>
                {/* <Arrow arrowtext={arrowtext} data_aos="fade-up" data_aos_delay='400' /> */}
                <div className="flex items-center gap-5 description" data-aos='fade-up' data-aos-delay='500'>
                    {arrowtext} <BsArrowRight />
                </div>
                <div className='flex flex-row gap-16 pt-16'>
                    {
                        cardData.map((item, index) => {
                            return (
                                <div key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`}>
                                    <h1 className='title'>{item.title}</h1>
                                    <p className='subtitle'>{item.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='container1 flex flex-col items-center w-1/2 gap-6'>
                <img src={image} className='pt-32 w-[500px] h-[350px]' data-aos="fade-up" data-aos-delay='100' />
                <img src={image1} />
                <img src={image2} />
            </div>
        </div>
    )
}

export default About;