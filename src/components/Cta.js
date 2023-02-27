import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import clsx from 'classnames';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { testimonialData } from "../data";
import TestimonialComp from "./Testimonial";

const Cta = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slideAfterIndex, setSlideAfterIndex] = useState(0);
    const sliderRef = useRef(null);

    console.log(111, slideIndex)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideIndex(next),
        afterChange: current => setSlideAfterIndex(current)
    };

    const handleNextChange = (e) => {
        if (slideAfterIndex === slideIndex) {
            setSlideIndex((pre) => (Math.min(pre + 1, testimonialData.length - 1)));
        }
    };

    const handlePrevChange = (e) => {
        if (slideAfterIndex === slideIndex) {
            setSlideIndex((pre) => (Math.max(pre - 1, 0)));
        }
    };

    useEffect(() => {
        sliderRef.current.slickGoTo(slideIndex);
    }, [slideIndex])

    return (
        <div className="w-full flex flex-col px-4 lg:px-10 py-10">
            <Slider ref={sliderRef} {...settings}>
                {
                    testimonialData.map((testimonialData, index) => {
                        return (
                            <div key={index}>
                                <TestimonialComp testimonialData={testimonialData} /></div>
                        )
                    })
                }
            </Slider>
            <div className="ml-auto flex flex-row gap-2" >
                <CiCircleChevLeft className={clsx("circle-arrow", { "text-gray-300": slideIndex === 0, "text-blue-500": slideIndex !== 0 })} onClick={handlePrevChange} />
                <CiCircleChevRight className={clsx("circle-arrow", { "text-gray-300": slideIndex >= testimonialData.length - 1, "text-blue-500": slideIndex < testimonialData.length - 1 })} onClick={handleNextChange} />
            </div>
        </div>
    )
}

export default Cta;
