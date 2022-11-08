import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const AllServices = useLoaderData();
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
            {
                AllServices.map(singleService => <SingleService key={singleService._id} singleService={singleService}></SingleService>)
            }
        </div>
    );
};

export default Services;