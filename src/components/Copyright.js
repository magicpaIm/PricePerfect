import React from "react";

import {FaRegCopyright} from 'react-icons/fa'
import { copyrightData } from "../data";
const Copyright = ({data_aos, data_aos_delay}) => {
    const {text} = copyrightData;
    return (
        <div className="flex inline-flex justify-center text-center items-center" data-aos={data_aos} data-aos-delay={data_aos_delay}>
            <FaRegCopyright className="text-gray-500"/>
            <p className="subtitle text-xs">{text}</p>
        </div>
    )
}

export default Copyright;