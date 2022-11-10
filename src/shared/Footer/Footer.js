import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineTravelExplore } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className='flex'>
                            <MdOutlineTravelExplore className='h-8 w-8 text-sky-500' />
                            <span className="self-center text-2xl font-semibold">Go<span className='text-sky-500'>Travel</span></span>
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Features</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Integrations</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Pricing</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Privacy</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Public API</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Documentation</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <Link rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                               
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                               
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;