import React from "react";

const Button = ({btnText}) => {
    return (
        <>
          <button className="bg-blue-500 px-8 py-3 text-white rounded-lg font-medium">{btnText}</button>  
        </>
    )
}

export default Button;