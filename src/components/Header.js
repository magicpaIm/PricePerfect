import React, { useState, useEffect, useRef } from 'react'

import { FaBars } from 'react-icons/fa'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import Button from "./Button";

import logo from '../assets/Logo1.png'

const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
    return (
        <header className='flex flex-row items-center justify-between w-full gap-10 p-5 z-10 relative' data-aos="fade-up" data-aos-delay='100' data-aos-duration='1200'>
            <a href="#" className='flex cursor-pointer'>
                <img src={logo} className="bg-auto aspect-[9/2] h-[30px] lg:ml-10" alt='logo'></img>
            </a>
            {/* <div className='hidden lg:flex'>
                <Navbar />
            </div> */}
            {/* {navMobile &&
                <div className="bg-gray-300 absolute top-20 left-0 h-54 w-full" data-aos="fade-zoom-in" data-aos-delay='100' data-aos-duration='1200'>
                    <NavbarMobile />
                </div>
            } */}
            {/* <div onClick={() => { setNavMobile(!navMobile) }}
                className='lg:hidden text-2xl text-gray-500 mr-2 cursor-pointer'>
                <FaBars />
            </div> */}
            <div className="flex flex-row ml-auto items-center gap-2 lg:mr-10 lg:gap-10">
                <a className="text-blue-600 text-xs lg:text-lg font-medium cursor-pointer" href='#'>Contact Us</a>
                <Button btnText="Try for Free" />
            </div>
        </header>
    )
}

export default Header;