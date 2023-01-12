import Aos from "aos";
import React from "react";
import { BsArrowRight } from 'react-icons/bs'
const Arrow = ({arrowtext, data_aos, data_aos_delay}) => {
    return (
        <div className="flex items-center gap-5 description" data-aos={data_aos} data-aos-delay={data_aos_delay}>
            {arrowtext} <BsArrowRight />
        </div>
    )
}

export default Arrow;