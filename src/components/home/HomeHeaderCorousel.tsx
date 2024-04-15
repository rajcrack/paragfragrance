import { Carousel } from "flowbite-react";
import Image from 'next/image';

export default function HomeHeaderCorousel() {
    return (
        <div className="h-[585.53px] w-full">
            <Carousel pauseOnHover>
                <div className="h-full relative w-full"><Image src="/home/topbar_1.jpg" alt="..." fill /></div>
                <div className="h-full relative w-full"><Image src="/home/topbar_2.jpg" alt="..." fill /></div>
                <div className="h-full relative w-full"><Image src="/home/topbar_3.jpg" alt="..." fill /></div>
                <div className="h-full relative w-full"><Image src="/home/topbar_4.jpg" alt="..." fill /></div>
                <div className="h-full relative w-full"><Image src="/home/topbar_5.jpg" alt="..." fill /></div>
                <div className="h-full relative w-full"><Image src="/home/topbar_6.jpg" alt="..." fill /></div>
            </Carousel>
        </div>
    );
}