import React from "react";
import { testimonialData } from "../data";
import Testimonial from "./Testimonial";

const Cta = () => {
    return (
        <div className="flex flex-col px-4 lg:px-10 py-10">
            {
                testimonialData.map((testimonialData, index) => {
                    return (
                        <Testimonial testimonialData={testimonialData} />
                    )
                })

            }
        </div>
    )
}

export default Cta;
