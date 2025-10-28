'use client';

import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = [{
        name: "Tags",
        href: "/tags"
    }, {
        name: "Ask",
        href: "/ask"
    }, {
        name: "Dashboard",
        href: "/dashboard"
    }]

    return (
        <header className='sticky top-0 z-50 w-full border-b-2 bg-background'>
            <nav className='flex flex-wrap items-center justify-between sm:gap-4 px-4 py-3 md:px-6 lg:px-8'>

                <div>
                    <h3 className='text-lg md:text-xl font-bold'>DevSolve</h3>
                </div>

                <div className='relative hidden md:block w-full md:w-auto flex-1 md:flex-none'>
                    <Search className='absolute top-2 left-2 size-5 text-accent-foreground/80' />
                    <Input placeholder='Search questions, tags, users....' className='w-full md:w-70 lg:w-lg pl-8' />
                </div>

                <div className='flex flex-wrap items-center gap-4 text-sm font-medium not-sm:hidden'>
                    {navLinks.map((navLink) => (
                        <Link key={navLink.name} href={navLink.href} className="hover:text-primary transition-colors">
                            {navLink.name}
                        </Link>
                    ))}
                </div>

                <div className='flex sm:gap-2 gap-4 items-center'>
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Button size="sm">Sign Up</Button>
                    <div className='sm:hidden'>
                        {isOpen ?<X onClick={() =>setIsOpen(prev =>!prev)} />:<Menu onClick={() =>setIsOpen(prev =>!prev)} />}
                    </div>
                </div>
                {isOpen ? (<div className=' fixed inset-0 top-14  w-full h-44 bg-background border-2 sm:hidden'>
                 {navLinks.map((navLink) => (
                    <div className='text-xl font-semibold flex justify-center py-3'>

                        <Link key={navLink.name} href={navLink.href} className="hover:text-primary transition-colors ">
                            {navLink.name}
                        </Link>
                    </div>
                    ))}
                </div>):(<></>)}

            </nav>
        </header>
    )
}

export default Navbar;
