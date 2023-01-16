import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { footerData, footernavData } from '../data';
import logo from '../assets/logo-footer.png'
import Button from './Button';
import Copyright from './Copyright';

const Footer = () => {
    const { title, subtitle, btnText, image } = footerData
    return (
        <div className='flex flex-col bg-slate-900 lg:py-10 w-full'>
            <div className='flex flex-col px-2 lg:px-10'>

                <div className='flex flex-col lg:flex-row py-10'>
                    <div className='flex flex-col pb-5 lg:pb-0 lg:pt-20 text-center lg:text-left'>
                        <h1 className='title text-white text-3xl lg:text-5xl' data-aos="fade-up" data-aos-delay='200'>{title}</h1>
                        <p className='subtitle' data-aos="fade-up" data-aos-delay='300'>{subtitle}</p>
                        <Button btnText={btnText} data_aos="fade-up" data_aos_delay='400' />
                    </div>
                    <img src={image} className="float-right w-[600px] z-0" alt="footer" data-aos="zoom-in" data-aos-delay='300' />
                </div>
                <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay='500'>

                    <img src={logo} className="bg-auto w-fit h-[30px] mx-auto mb-5" alt='logo'></img>
                    <div className='flex flex-row justify-between gap-5'>
                        <div className='flex flex-row gap-2'>
                            <div className='circle-icon'><FaFacebookF className='footer-icon' /></div>
                            <div className='circle-icon'><FaInstagram className='footer-icon' /></div>
                        </div>
                        {
                            <ul className="hidden lg:flex flex-row justify-between gap-x-10">
                                {
                                    footernavData.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a className="navbar-menu" href={item.href}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        <div className='flex flex-row gap-2'>
                            <div className='circle-icon'><FaLinkedinIn className='footer-icon' /></div>
                            <div className='circle-icon'><FaTwitter className='footer-icon' /></div>
                        </div>

                    </div>
                    <div className="w-[90%] justify-center py-2 lg:py-5 mx-auto border-b-2 border-gray-800"></div>
                    <Copyright />
                </div>
            </div>

        </div>
    )
}

export default Footer;

