import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoTwitter, BiLogoWhatsapp, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Navbar() {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className='z-50'>
            <div className="topNav flex justify-between px-[7%] z-50 py-2">
                <h1 className='uppercase text-sm font-semibold text-yellow-600 z-50'>idahvisng<span className='text-sm text-white lowercase'>.com</span></h1>
                <div className="icons flex text-white text-sm justify-between gap-3 z-40">
                    <BiLogoFacebook className='hover:text-yellow-600 hover:text-xl duration-200 ease-in-out cursor-pointer' />
                    <BiLogoTwitter className='hover:text-yellow-600 hover:text-xl duration-200 ease-in-out cursor-pointer' />
                    <BiLogoWhatsapp className='hover:text-yellow-600 hover:text-xl duration-200 ease-in-out cursor-pointer' />
                    <BiLogoLinkedin className='hover:text-yellow-600 hover:text-xl duration-200 ease-in-out cursor-pointer' />
                </div>
            </div>
            <nav className={color ? "transition-opacity delay-150 ease-linear duration-300 bg-white w-full py-2 fixed z-50 top-0" : "bg-white/40 w-full absolute z-50"}>
                <div className="flex justify-between ">
                    <div className={color ? "text-black navLinks uppercase ml-auto py-5" : "navLinks uppercase ml-auto text-black py-5"}>
                        <div className="test">
                            <Link to="/" className={color ? 'font-black hover:text-xl duration-200 ease-in-out font-mono lg:text-lg md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 focus-within:text-yellow-500' : 'font-black hover:text-yellow-500 hover:text-xl duration-200 ease-in-out font-mono lg:text-lg md:text-lg sm:text-sm text-white lg:mx-6 md:mx-6 sm:mx-5'}>Home</Link>
                            <Link to="/" className={color ? 'font-black hover:text-xl duration-200 ease-in-out font-mono lg:text-lg md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4' : 'font-black font-mono lg:text-lg md:text-lg sm:text-sm text-white hover:text-yellow-500 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>About</Link>
                            <Link to="/" className={color ? 'font-black hover:text-xl duration-200 ease-in-out font-mono lg:text-lg md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4' : 'font-black font-mono lg:text-lg md:text-lg sm:text-sm text-white hover:text-yellow-500 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>Jobs</Link>
                            <Link to="/" className={color ? 'font-black hover:text-xl duration-200 ease-in-out font-mono lg:text-lg md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-5' : 'font-black font-mono lg:text-lg md:text-lg sm:text-sm text-white hover:text-yellow-500 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
