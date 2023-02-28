import React from "react";
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialComp = ({ testimonialData, index }) => {
    const { titleup, titledown, image, name, role } = testimonialData
    return (
        <>
            <div >
                <FaQuoteLeft className="text-blue-500 text-5xl my-10" data-aos="fade-up" data-aos-delay='100' />
                <div className="flex flex-col text-center">
                    <h1 className="title text-xl lg:text-5xl lg:leading-[60px]" data-aos="fade-up" data-aos-delay='300' data-aos-duration="600" data-aos-offset='300'>{titleup}</h1>
                    <h1 className="title text-xl lg:text-5xl lg:leading-[60px]" data-aos="fade-up" data-aos-delay='500'>{titledown}</h1>
                </div>
            </div>
            <div className="w-[90%] justify-center py-5 mx-auto border-b-4 text-gray-800" data-aos="fade-up" data-aos-delay='600'></div>
            {/* <div className="flex flex-row items-center py-5" data-aos="fade-up" data-aos-delay='700'>

                <img src={image} className="w-[70px] h-[70px] rounded-full" alt="avatar" />
                <div className="items-center px-2">
                    <div className="text-xl lg:text-2xl font-bold py-1">{name}</div>
                    <div className="text-xs lg:text-lg subtitle py-1">{role}</div>
                </div>
            </div> */}
        </>
    )
}

export default TestimonialComp;
