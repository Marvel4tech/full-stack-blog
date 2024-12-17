import React, { useState } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';


const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className=' w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/" className=' flex items-center gap-4 text-2xl font-bold'>
            <Image src={"/logo.png"} alt={"Lama logo"} w={32} h={32} />
            <span>lamalog</span>
        </Link>

        {/* MOBILE MENU */}
        <div className=' md:hidden'>
            {/* Mobile Button */}
            <div className=' cursor-pointer text-4xl' onClick={() => setOpen(open => !open)}>
                {open ? "X" : "="}
            </div>
            {/* Mobile Link Lists */}
            <div className={ `w-full h-screen flex flex-col justify-center items-center absolute top-16 bg-[#e6e6ff] transition-all 
            ease-in-out gap-8 font-medium text-lg ${open ? "-right-0" : "-right-[100%]"}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>Trending</Link>
                <Link to={"/"}>Most Popular</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>
                    <button className=' py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                </Link>
            </div>
        </div>

        {/* DESKTOP MENU */}
        <div className=' hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Trending</Link>
            <Link to={"/"}>Most Popular</Link>
            <Link to={"/"}>About</Link>
            <SignedOut>
                <Link to={"/login"}>
                    <button className=' py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar