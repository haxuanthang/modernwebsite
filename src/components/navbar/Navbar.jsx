import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';


const Menu = () => (
    <>
        <p><a href="#home"></a>Home</p>
        <p><a href="#wgpt3"></a>What is GPT?</p>
        <p><a href="#possibility"></a>Open AI</p>
        <p><a href="#features"></a>Case Studies</p>
        <p><a href="#blog"></a>Library</p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="gpt-logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => (false)} />
                    : <RiMenu3Fill color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <Menu />
                            <div className='gpt3__navbar-container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Navbar
