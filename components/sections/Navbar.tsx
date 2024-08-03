'use client'
import Link from "next/link";
import React from "react";
import logo from '@/public/vercel.svg'
import Image from "next/image";


const navItems = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Service',
        link: '/service'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: "Contact Us",
        link: "/contact"
    }
]

interface nav {
    title: string,
    link: string
}
export default function Navbar() {
    return (
        <>
            <nav className="w-screen items-center flex justify-between px-20 h-20  bg-gray-300" >
                <div className="">
                    <Image alt="The Bright Layers Logo" src={logo} width={128} height={128} />
                </div>
                <div className="flex gap-10">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About us</Link>
                <Link href={'/services'}>Our Services</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/contact'}>Contact Us</Link>
                </div>
            </nav>
        </>
    )
}