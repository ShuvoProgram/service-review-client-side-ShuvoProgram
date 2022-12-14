import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
// import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import ReviewRows from './ReviewRows';
import { toast } from 'react-toastify';

const MyReview = () => {
    // const { user } = useContext(AuthProvider);
    const [review, setReview] = useState([]);
    
    useTitle('My Review')
    useEffect(() => {
        fetch('https://server-shuvoprogram.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReview(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete review');
        if(proceed){
            fetch(`https://server-shuvoprogram.vercel.app/review/${id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('')}`
                // }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deleteCount > 0) {
                    
                    const remaining = review.filter(rv => rv._id !== id);
                    setReview(remaining);
                }
                toast.success('Deleted Review !')
            })
        }
    }
    return (
            <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Service name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        User Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Rating
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Review
                    </Table.HeadCell>
                    <Table.HeadCell>
                            Edit Review
                    </Table.HeadCell>
                    <Table.HeadCell>
                            Delete Review
                    </Table.HeadCell>
                </Table.Head>
                {review.length > 0 ? (
                         review.map(rv => <ReviewRows key={rv._id} review={rv} handleDelete={handleDelete}/>)
                    
                ) : (<p className='text-2xl font-semibold'> No reviews were added </p>)}
            </Table>
        </div>
    );
};

export default MyReview;