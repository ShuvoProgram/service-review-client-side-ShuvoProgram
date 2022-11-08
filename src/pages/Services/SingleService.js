import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ singleService }) => {
    const {_id, img, package_name, description, price } = singleService;
    return (
            <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{package_name}</h2>
                        <p className="dark:text-gray-100">{description.slice(0, 100) + '...'}</p>
                    </div>
                    <p>Bdt: {price}</p>
                <Link className='bg-sky-500 w-40 p-2 rounded-lg flex justify-center text-white' to={`/services/${_id}`}>Package Details</Link>
                </div>
            </div>
    );
};

export default SingleService;