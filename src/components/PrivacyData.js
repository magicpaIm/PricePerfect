import React from "react";

//import hero data
import { privacy } from "../data";

const PrivacyData = () => {
  //destructure hero data

  return (
    <div className="w-full">
      <div className="container1" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full justify-center items-center md:p-20 p-10">
          {privacy.map((data, index) => {
            if (index % 2 === 0)
              return (
                <div className="pt-5 pb-5 md:text-3xl text-xl font-bold">
                  <pre>{data}</pre>
                </div>
              );
            return (
              <div className="pb-10">
                <pre>{data}</pre>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyData;
