import React from "react";
import logo from '../assets/Logo1.png'
import Button from "./Button";
import { navigationData } from "../data";

const NavbarMobile = ( ) => {
    return (
        <ul className="z-[11] flex flex-col px-5 py-8 gap-y-4">
            <a href="#" className='' >
                <img src={logo} className="bg-auto w-fit h-[30px] " alt='logo'></img>
            </a>
            {
                navigationData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="navbar-menu"href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default NavbarMobile;