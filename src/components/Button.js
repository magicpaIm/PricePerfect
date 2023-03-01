import React from "react";

const Button = ({btnText, data_aos, data_aos_delay}) => {
    return (
        <div data-aos={data_aos} data-aos-delay={data_aos_delay}>
          <button className="bg-blue-500 text-xs lg:text-lg px-1 py-2 lg:px-8 lg:py-3 text-white rounded-lg font-medium w-fit">{btnText}</button>  
        </div>
    )
}

export default Button;