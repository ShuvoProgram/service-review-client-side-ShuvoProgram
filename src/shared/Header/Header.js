import { Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AuthProvider } from '../../context/AuthContext';

const Header = () => {
    const { user } = useContext(AuthProvider);
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
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
                {/* {
                    user?.uid ? <Dropdown label="Bonnie Green">
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block text-sm font-medium truncate">
                                bonnie@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item icon={<MdOutlineTravelExplore/>}>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item icon={<MdOutlineTravelExplore/>}>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item icon={<MdOutlineTravelExplore/>}>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item icon={<MdOutlineTravelExplore/>}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    : 
                        <Navbar.Link href="/login">
                            Login
                        </Navbar.Link>
                } */}
                <Navbar.Link href="/login">
                    Login
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;