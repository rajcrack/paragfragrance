import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react'
import { Popover } from 'flowbite-react/components/Popover';

const NavLinks =
{
    attars: [
        { href: "", title: "6 ML Pack" },
        { href: "", title: "12 ML Pack" },
        { href: "", title: "25 ML Pack" },
        { href: "", title: "100 ML Pack" },
        { href: "", title: "500 ML Pack" },
        { href: "", title: "Arabian Series" },
        { href: "", title: "Fancy Pack" },
        { href: "", title: "Wood Pack" },
    ],
    agarbatti: [
        { href: "", title: "Agarbatti" },
        { href: "", title: "Dhoop" },
        { href: "", title: "Hawan Samagri" },
        { href: "", title: "Loban & Guggal" },
        { href: "", title: "Sandalwood" },
    ],
    gallery: [
        { href: "", title: "Image" },
        { href: "", title: "Video" },
    ]
};

const attarContent = (
    <div className="w-[200px] text-sm text-gray-500 dark:text-gray-400">
        <div className="px-3 py-2 flex flex-col pt-4">
            {
                NavLinks.attars.map((link, index) => (<Link key={index} href={link.href} className='pt-2 pb-2 pl-5 w-full hover:text-blue-400 font-medium'>{link.title}</Link>))
            }
        </div>
    </div>
);
const agarbattiContent = (
    <div className="w-[200px] text-sm text-gray-500 dark:text-gray-400">
        <div className="px-3 py-2 flex flex-col pt-4">
            {
                NavLinks.agarbatti.map((link, index) => (<Link key={index} href={link.href} className='pt-2 pb-2 pl-5 w-full hover:text-blue-400 font-medium'>{link.title}</Link>))
            }
        </div>
    </div>
);
const galleryContent = (
    <div className="w-[200px] text-sm text-gray-500 dark:text-gray-400">
        <div className="px-3 py-2 flex flex-col pt-4">
            {
                NavLinks.gallery.map((link, index) => (<Link key={index} href={link.href} className='pt-2 pb-2 pl-5 w-full hover:text-blue-400 font-medium'>{link.title}</Link>))
            }
        </div>
    </div>
);

// ${usePathName === item.href && 'text-blue-600'}

const Links = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [indexed, setIndexed] = useState(0);
    const usePathName = usePathname();
    return (
        <div className='flex items-center space-x-10'>
            <Popover content={attarContent} placement="bottom" trigger='hover' >
                <div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Attars</div>
            </Popover>
            <Popover content={agarbattiContent} placement="bottom" trigger='hover' >
                <div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Agarbatti & Dhoop</div>
            </Popover>
            <div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Essential Oil</div>
            <Popover content={galleryContent} placement="bottom" trigger='hover' >
                <div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Gallery</div>
            </Popover>
            <Link href='#'><div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Track</div></Link>
            <Link href='#'><div className={`text-[14px] font-medium hover:text-blue-500 cursor-pointer`}>Login/Signup</div></Link>
        </div>
    )
}

export default Links