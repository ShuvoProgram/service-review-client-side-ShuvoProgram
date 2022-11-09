import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const ReviewRows = ({ review, handleDelete }) => {
    const { _id, serviceName, name, rating, description, reviewId } = review;
    const [reviewCount, setReviewCount] = useState({});

    console.log(reviewId)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${reviewId}`)
    //     .then(res => res.json())
    //     .then(data => setReviewCount(data))
    // }, [reviewId])
    // console.log(reviewCount);
    return (
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {serviceName}
                </Table.Cell>
                <Table.Cell>
                    {name}
                </Table.Cell>
                <Table.Cell>
                    {rating}
                </Table.Cell>
                <Table.Cell>
                    {description}
                </Table.Cell>
                <Table.Cell>
                    <button onClick={() => handleDelete(_id)} className='p-2 px-4 bg-red-700 text-white rounded-xl'>
                        X
                    </button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    );
};

export default ReviewRows;