import { Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRows = ({ review, handleDelete, handleUpdate }) => {
    const { _id, serviceName, name, rating, description } = review;

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
                        <Link to={`/edit/${_id}`} className='p-2 px-4 bg-lime-600 text-white rounded-xl'>
                            Edit
                        </Link>
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