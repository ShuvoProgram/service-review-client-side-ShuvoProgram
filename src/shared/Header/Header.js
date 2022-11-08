import { Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

const Header = () => {
    const { user, signout } = useContext(AuthProvider);
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
            <Navbar.Collapse className='mr-10'>
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
                {
                    user?.uid ? 
                    <Dropdown label={user.displayName}>
                            <Dropdown.Header>
                                <img className='w-20 h-20 rounded-lg' src={user.photoURL} alt="" />
                                <span className="block text-sm font-medium truncate">
                                    {user.email}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Item onClick={signout}>
                                Log Out
                            </Dropdown.Item>
                    </Dropdown>
                    :
                        <Navbar.Link href="/login">
                            Login
                        </Navbar.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;