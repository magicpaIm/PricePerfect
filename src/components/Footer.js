import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { footerData, footernavData } from '../data';
import logo from '../assets/logo-footer.png'
import Button from './Button';
import Copyright from './Copyright';

const Footer = () => {
    const { title, subtitle, btnText, image, } = footerData
    return (
        <div className='flex flex-col bg-slate-900 lg:py-10 w-full rounded-t-3xl'>
            <div className='flex flex-col px-2 lg:px-10'>

                <div className='flex flex-col lg:flex-row py-10'>
                    <div className='flex flex-col pb-5 lg:pb-0 lg:pt-20 text-center lg:text-left'>
                        <h1 className='title text-white lg:text-5xl pb-10' data-aos="fade-up" data-aos-delay='200'>{title}</h1>
                        <Button btnText={btnText} data_aos="fade-up" data_aos_delay='400' />
                    </div>
                    <iframe className="mx-auto lg:float-right w-full lg:w-[1200px] h-[240px] lg:h-[420px] z-0"
                        src="https://player.vimeo.com/video/803439591?h=b962ddd0b6" alt="footer" data-aos="zoom-in" data-aos-delay='300'
                        title="payer.vimeo.player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen >

                    </iframe>
                </div>
                <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay='300'>
                    <img src={logo} className="bg-auto mx-auto mb-3 aspect-[7/2] lg:aspect-[9/2] h-[30px] py-1 lg:py-0" alt='logo'></img>
                    <div className='flex flex-row justify-between gap-5'>
                        {
                            <ul className="lg:flex flex-row justify-center mx-auto">
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
                    </div>

                    <div className="w-[90%] justify-center py-2 lg:py-5 mx-auto border-b-2 border-gray-800"></div>
                    <Copyright />
                    {/* <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <img src={logo} className="bg-auto w-fit h-[30px] py-1 lg:py-0" alt='logo'></img>
                        <Copyright />
                        <div className='flex flex-row justify-between gap-5'>
                            {
                                <ul className="lg:flex flex-row justify-center mx-auto">
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
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Footer;

