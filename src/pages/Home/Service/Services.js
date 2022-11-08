import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { package_name, img, description, price } = service;
    return (
        <Link>
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
            </Card>
        </Link>
    );
};

export default Services;