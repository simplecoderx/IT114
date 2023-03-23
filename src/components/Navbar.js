import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='hero' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='services' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>SERVICES</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='portfolio' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>PORTFOLIO</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='pricingplans' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>PRICING PLANS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='testimonials' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>TESTIMONIAL</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='faq' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>FAQ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>ABOUT US</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' onClick={closeMenu} spy={true} smooth={true} offset={-150} duration={500}>CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
