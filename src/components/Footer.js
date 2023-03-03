import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { footerData, footernavData } from "../data";
import logo from "../assets/logo-footer.png";
import Button from "./Button";
import Copyright from "./Copyright";

const Footer = () => {
  const { title, subtitle, btnText, image } = footerData;
  return (
    <div className="flex flex-col bg-slate-900 lg:py-10 w-full ">
      <div className="flex flex-col px-2 lg:px-10">
        <div
          className="flex flex-col justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={logo}
            className="bg-auto mx-auto mb-3 aspect-[7/2] lg:aspect-[9/2] h-[30px] py-1 lg:py-0"
            alt="logo"
          ></img>
          <div className="flex flex-row justify-center">
            {
              <ul className="lg:flex flex-col justify-center mx-auto items-center">
                {footernavData.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="navbar-menu" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            }
          </div>

          <div className="w-[90%] justify-center py-2 lg:py-5 mx-auto border-b-2 border-gray-800"></div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
