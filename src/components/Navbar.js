import React from "react";
import logo from '../assets/Logo1.png'
import Button from "./Button";

const Navbar = ( ) => {
    return (
        <div className="flex flex-row items-center justify-between w-full gap-10 p-5" data-aos="fade-zoom-in" data-aos-delay='100'>
            <img src={logo} className="bg-auto w-fit h-[30px] ml-10"></img>
            <p className="navbar-menu">How it works</p>
            <p className="navbar-menu">Features</p>
            <p className="navbar-menu">Pricing</p>
            <p className="navbar-menu">About Us</p>
            <p className="navbar-menu">Blog</p>
            <div className="flex flex-row ml-auto items-center mr-10 gap-10">
                <p className="text-blue-600 font-medium">Login</p>
                <Button btnText="Get Started"/>
            </div>


        </div>
    )
}

export default Navbar;