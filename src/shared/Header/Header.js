import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
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
                    <Dropdown
                            label={<Avatar alt="User settings" img={user.photoURL} rounded={true} />}
                            arrowIcon={false}
                            inline={true}
                            >
                            <Dropdown.Header>
                                <span className="block text-sm font-medium truncate">
                                    {user.displayName}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <Link to='/addservice'>Add Services</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to='/myreview'>My Reviews</Link>
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