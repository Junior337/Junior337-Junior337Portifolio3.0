"use client";
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "Sobre",
        path: "#about",
    },
    {
        title: "Projetos",
        path: "#projects",
    },
    {
        title: "Contato",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0  right-0 z-20 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'} className='text-2xl px-8 md:text-5xl text-white font-semibold'>
                    <div className="w-[90px] h-[90px] lg:w-[90px] lg:h-[90px] relative">
                        <Image src="/images/avatar-3d(v2).png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                        <h1 className='px-[6rem] py-7 text-[2rem] '>Junior<span className='text-[#4E9317]'>(Dev)</span>
                        </h1>
                    </div>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav >
    )
}

export default Navbar
