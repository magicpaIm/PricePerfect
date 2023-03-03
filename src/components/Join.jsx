import React from "react";

import { footerData } from "../data";
import Button from "./Button";

const Join = () => {
  const { title, subtitle, btnText, image } = footerData;
  return (
    <div className="flex flex-col bg-slate-900  w-full rounded-t-3xl">
      <div className="flex flex-col px-2 lg:px-10">
        <div className="flex flex-col lg:flex-row py-10">
          <div className="flex flex-col pb-5 lg:pb-0 lg:pt-20 text-center lg:text-left">
            <h1
              className="title text-white lg:text-5xl pb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h1>
            <Button btnText={btnText} data_aos="fade-up" data_aos_delay="400" />
          </div>
          <iframe
            className="mx-auto lg:float-right w-full lg:w-[1200px] h-[240px] lg:h-[420px] z-0"
            src="https://player.vimeo.com/video/803439591?h=b962ddd0b6"
            alt="footer"
            data-aos="zoom-in"
            data-aos-delay="300"
            title="payer.vimeo.player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Join;
