import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import SingleService from './SingleService';

const Services = () => {
    const { user, loading } = useContext(AuthProvider);
    useTitle('Services')
    const [allServices, setAllServices] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = `https://server-lake-psi.vercel.app/services?page=${page}&size=${size}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCount(data.count);
            setAllServices(data.services)
        })
    }, [page, size])
    const pages = Math.ceil(count / size);

    
    return (
        <>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
            {
                allServices.map(singleService => <SingleService key={singleService._id} singleService={singleService}></SingleService>)
            }
        </div>
        <div className='flex flex-col items-center my-10'>
                <p>Currently selected page: {page} size {size}</p>
                <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                    <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700">
                        <span className="sr-only">Previous</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    {
                        [...Array(pages).keys()].map(number => (
                            
                                <button type="button" key={number}
                                    onClick={() => setPage(number)} className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">{number}</button>
                            )
                        )
                    }
                    
                    <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700">
                        <span className="sr-only">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </nav>
        </div>
        </>
    );
};

export default Services;