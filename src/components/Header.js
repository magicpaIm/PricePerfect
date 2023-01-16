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
            <a href="#" className='hidden lg:block'>
                <img src={logo} className="bg-auto w-fit h-[30px] ml-10" alt='logo'></img>
            </a>
            <div className='hidden lg:flex'>
                <Navbar />
            </div>
            {navMobile &&
                <div  className="bg-gray-300 absolute top-20 left-0 h-54 w-full" data-aos="fade-zoom-in" data-aos-delay='100' data-aos-duration='1200'>
                    <NavbarMobile />
                </div>
            }
            <div onClick={() => { setNavMobile(!navMobile)}}
                className='lg:hidden text-2xl text-gray-500 mr-2 cursor-pointer'>
                <FaBars />
            </div>
            <div className="flex flex-row ml-auto items-center gap-2 lg:mr-10 lg:gap-10">
                <p className="text-blue-600 font-medium cursor-pointer">Login</p>
                <Button btnText="Get Started" />
            </div>
        </header>
    )
}

export default Header;