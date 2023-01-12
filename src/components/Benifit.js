import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { benifitData, benifitcardData } from '../data'

const Benifit = () => {
    const { order, title, subtitle, arrowtext, bgimage, aniimage } = benifitData
    return (
        <div className='flex flex-row  px-16 pt-28 items-center'>
           
            <div className='container1 bg-gray-200  w-1/2 gap-6 h-[700px]' >
                <div className='benifitbg mt-16 mr-auto h-full w-[90%] bg-center bg-cover rounded-tr-xl' data-aos="fade-up" data-aos-delay='100'>
                    
                    <img src={aniimage} className='ml-5 pt-20' data-aos="zoom-in-right" data-aos-delay='150' />
                </div>
            </div>
            <div className='flex flex-col  items-center pl-20 w-1/2'>
                <p className='description' data-aos="fade-up" data-aos-delay='200'>{order}</p>
                <h1 className='title ' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                <p className='subtitle py-10' data-aos="fade-up" data-aos-delay='400'>{subtitle}</p>
                <div className="flex items-center gap-5 description" data-aos='fade-up' data-aos-delay='500'>
                    {arrowtext} <BsArrowRight />
                </div>
                <div className='flex flex-row gap-24 pt-16'>
                    {
                        benifitcardData.map((item, index) => {
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
        </div>
    )
}

export default Benifit;