"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'

export default function Section3Card() {
    const [currentTab, setCurrentTab] = useState(0);
    const changeTab = (index: number) => {
        if (currentTab == index) {
            return;
        }
        setCurrentTab(index);
    }
    const activeClassName = "bg-[#331402] text-white";
    const inActiveClassName = "bg-white text-[#331402]";
    const commonClassName = "transition-all ease-in-out duration-300 flex justify-center text-[18px] items-center";

    return (
        <div className="w-full py-10 text-[#353333] items-center flex flex-col">
            {/* tabs */}
            <div className='flex w-full h-[48px] border flex-row cursor-pointer'>
                {/* tab 1 */}
                <div className={(currentTab == 0 ? activeClassName : inActiveClassName) + ` ${commonClassName} ${currentTab == 0 ? 'w-[51%]' : 'w-[49%]'}`} onClick={() => changeTab(0)}>Search by Fragrances</div>
                {/* tab 2 */}
                <div className={(currentTab == 1 ? activeClassName : inActiveClassName) + ` ${commonClassName} ${currentTab == 1 ? 'w-[51%]' : 'w-[49%]'}`} onClick={() => changeTab(1)}>Best Selling Products</div>
            </div>

            {currentTab == 0 ?
                (<div className="mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    <Link className="w-[260px] h-[260px] mb-8 mx-3 md:mt-7" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_amber.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8 md:mt-7" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_arabic.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8 md:mt-7" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_auatic.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8 lg:mt-7" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_citrus.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_cocoa.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_english_flower.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_fine.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_fruity.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_hena.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_indian_flower.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_khus.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_leathery.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_mitti.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_musk.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_oudhwood.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_roses.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_saffon.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_sandlewood.jpg" alt='image' fill /></div></Link>
                    <Link className="w-[260px] h-[260px] mb-8" href='#'><div className='relative w-[260px] h-[260px]'><Image src="/home/card_spicy.jpg" alt='image' fill /></div></Link>
                </div>)
                :
                (<>Dasta from database show here</>)
            }

        </div>
    )
}
