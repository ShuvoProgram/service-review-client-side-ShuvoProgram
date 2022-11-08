import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { _id, img, package_name, description, price } = useLoaderData()
    return (
        <div>
            <h className="text-2xl">{package_name}</h>
        </div>
    );
};

export default ServicesDetails;