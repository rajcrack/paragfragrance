"use client";
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import MobileNav from './MobileNav';




const ResponsiveNav = () => {
    const [isRunnning, setRunning] = useState(false);

    useEffect(() => {

    },);


    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
    return (
        <>
            <div className='border-b shadow-md sticky top-0 bg-white z-[200]'>
                <NavBar openNav={openNavHandler} />
                <MobileNav nav={showNav} closeNav={closeNavHandler} />

            </div>
        </>
    )
}

export default ResponsiveNav