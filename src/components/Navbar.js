import React from "react";
import logo from '../assets/Logo1.png'
import Button from "./Button";
import { navigationData } from "../data";
const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-x-10">
                {
                    navigationData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="navbar-menu" href={item.href}>{item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;