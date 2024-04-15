import { Card } from "flowbite-react";
import Image from "next/image";
import Link from 'next/link'

interface Props {
    title: string
    image: string
    link: string
}
export default function Section2Card({ title, image, link }: Props) {
    return (
        <Link href={link}>
            <div className="max-w-sm cursor-pointer pb-5">
                <Image width={500} height={500} src={image} alt="image 1" />
                <h1 className="text-center text-[14px] font-bold pt-1">{title}</h1>
            </div>
        </Link>
    )
}
