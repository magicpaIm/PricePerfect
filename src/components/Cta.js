import React from "react";
import { FaQuoteLeft } from 'react-icons/fa'
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

import { ctaData, avatarData } from "../data";

const Cta = () => {
    const { titleup, titledown } = ctaData
    const { image, name, role } = avatarData
    return (
        <div className="flex flex-col px-10 py-10">
            <div className="">
                <FaQuoteLeft className="text-blue-500 text-5xl my-10" data-aos="fade-up" data-aos-delay='100'/>
                <div className="flex flex-col text-center">
                    <h1 className="title text-5xl leading-[60px]" data-aos="fade-up" data-aos-delay='300' data-aos-duration="600" data-aos-offset='300'>{titleup}</h1>
                    <h1 className="title text-5xl leading-[60px]" data-aos="fade-up" data-aos-delay='500'>{titledown}</h1>
                </div>
            </div>
            <div className="w-[90%] justify-center py-5 mx-auto border-b-4 text-gray-800" data-aos="fade-up" data-aos-delay='600'></div>
            <div className="flex flex-row items-center py-5" data-aos="fade-up" data-aos-delay='700'>
                <img src={image} className="w-[70px] h-[70px]" alt="avatar" />
                <div className="items-center px-2">
                    <div className="text-2xl font-bold py-1">{name}</div>
                    <div className="subtitle py-1">{role}</div>
                </div>
            <div className="ml-auto flex flex-row gap-2" >
                <CiCircleChevLeft className="text-gray-300 circle-arrow"/>
                <CiCircleChevRight className="text-blue-500 circle-arrow"/>
            </div>
            </div>

        </div>
    )
}

export default Cta;
