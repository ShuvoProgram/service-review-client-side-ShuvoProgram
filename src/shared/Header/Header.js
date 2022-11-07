import { Navbar } from 'flowbite-react';
import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <MdOutlineTravelExplore className='h-8 w-8 text-sky-500'/>
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    Go<span className='text-sky-500'>Travel</span>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/services">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/blog">
                    Blog
                </Navbar.Link>
                <Navbar.Link href="/about">
                    About
                </Navbar.Link>
                <Navbar.Link href="/login">
                    Login
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;