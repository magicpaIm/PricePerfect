import React from "react";

//import hero data
import { privacy } from "../data";

const PrivacyData = () => {
  //destructure hero data

  return (
    <div className="w-full">
      <div className="container1" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full justify-center items-center md:p-14 p-8">
          <div className="pb-10">
            <h4 className="font-bold text-lg">Privacy Policy</h4>
          </div>
          {privacy.map((data, index) => {
            if (index % 2 === 0)
              return (
                <div className="pt-2 pb-2 font-bold text-sm">
                  <pre>{data}</pre>
                </div>
              );
            return (
              <div className="pb-10 text-base text-sm">
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
