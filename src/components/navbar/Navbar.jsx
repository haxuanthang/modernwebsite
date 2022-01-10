import React from 'react';
import './navbar.css';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className='gpt__navbar'>
            <div className='gpt__navbar-links'>
                <div className='gpt__navbar-links_logo'>
                    <img src={logo} alt="gpt-logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
