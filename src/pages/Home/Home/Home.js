import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner/>
            <div className='mt-10'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-2xl text-sky-500 font-semibold'>Top Packages</h1>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
                    {
                        services.map(service => <Services key={service._id} service={service}></Services>)
                    }
                    <Link className='w-20 rounded-lg flex justify-center text-white bg-sky-500 p-2' to={'/services'}><button>All See</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;