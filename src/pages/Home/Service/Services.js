import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const {_id, package_name, img, description, price } = service;
    return (
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {package_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100) + '...'}
                </p>
                <p>Bdt: {price}</p>
                <Link className='bg-sky-500 w-40 p-2 rounded-lg flex justify-center text-white' to={`/services/${_id}`}>Package Details</Link>
            </Card>
    );
};

export default Services;