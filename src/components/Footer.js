import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { footerData } from '../data';
import logo from '../assets/logo-footer.png'
import Button from './Button';
import Copyright from './Copyright';

const Footer = () => {
    const { title, subtitle, btnText, image } = footerData
    return (
        <div className='flex flex-col bg-slate-900 py-10 w-full'>
            <div className='flex flex-col px-10'>

                <div className='flex flex-row py-10'>
                    <div className='flex flex-col pt-20'>
                        <h1 className='title text-white text-5xl' data-aos="fade-up" data-aos-delay='200'>{title}</h1>
                        <p className='subtitle' data-aos="fade-up" data-aos-delay='300'>{subtitle}</p>
                        <Button btnText={btnText} data_aos="fade-up" data_aos_delay='400' />
                    </div>
                    <img src={image} className="float-right w-[600px] z-0" alt="footer" data-aos="zoom-in" data-aos-delay='300' />
                </div>
                <div className="flex flex-col justify-center"data-aos="fade-up" data-aos-delay='500'>

                    <img src={logo} className="bg-auto w-fit h-[30px] mx-auto mb-5" alt='logo'></img>
                    <div className='flex flex-row justify-between gap-5'>
                        <div className='flex flex-row gap-2'>
                            <div className='circle-icon'><FaFacebookF className='footer-icon' /></div>
                            <div className='circle-icon'><FaInstagram className='footer-icon' /></div>
                        </div>
                        <div className='flex flex-row justify-between gap-10'>
                            <p className="navbar-menu">Features</p>
                            <p className="navbar-menu">About Us</p>
                            <p className="navbar-menu">Testimonials</p>
                            <p className="navbar-menu">Download</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div className='circle-icon'><FaLinkedinIn className='footer-icon' /></div>
                            <div className='circle-icon'><FaTwitter className='footer-icon' /></div>
                        </div>

                    </div>
                    <div className="w-[90%] justify-center py-5 mx-auto border-b-2 border-gray-800"></div>
                    <Copyright />
                </div>
            </div>

        </div>
    )
}

export default Footer;

