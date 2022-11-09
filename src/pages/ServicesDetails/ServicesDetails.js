import React, { useContext, useEffect, useState } from 'react';
import { Link,  useLoaderData } from 'react-router-dom';
import './ServicesDetails.css';
import { BsStarFill, BsStarHalf, BsCalendarDay, BsFillCaretRightFill, BsCoin, BsWallet } from "react-icons/bs";
import { SiFortran } from "react-icons/si";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Card, Rating, Textarea } from 'flowbite-react';
import { AuthProvider } from '../../context/AuthContext';
import { GiFoxHead } from "react-icons/gi";

const ServicesDetails = () => {
    const { user } = useContext(AuthProvider);
    const {_id, img, package_name, description, price, rating, tour_date_time, tour_feature, facility, Things_to_Carry } = useLoaderData();
    const [review, setReview] = useState([]);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const reviewField = form.review.value;
        
        const review = {
           reviewId: _id,
           serviceName: package_name,
           name: user.displayName,
           photo: user.photoURL,
           rating: rating,
           description: reviewField
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged){
                form.reset()
            }
            // console.log(data);
        })
        .catch(err => console.error(err))
    }

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReview(data)
        })
    }, [])


    return (
        <div className='serviceDetailsContainer mt-8'>
            <div className='p-6'>
                <h className="text-5xl mb-3 font-serif">{package_name}</h>
                <div className='flex items-center justify-between w-52 my-3'>
                    <div className='flex items-center'>
                        <span className='flex text-yellow-300'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </span>
                        <span>{rating}</span>
                    </div>
                    <div>
                        <p>({} Reviews)</p>
                    </div>
                </div>
                <div className='my-4'>
                        {tour_date_time.map(dt => (
                            <div className='flex items-center justify-between w-80 text-xl'>
                                <span className='flex items-center'><AiOutlineFieldTime className='mr-2'/> {dt.days} Days</span>
                                <span className='flex items-center'><BsCalendarDay className='mr-2'/> {dt.date} </span>
                            </div>
                        ))}
                </div>
                <div>
                    <img className='w-10/12 h-4/6' src={img} alt="" />
                    <div className='mt-10'>
                        <h className="text-2xl font-bold">Description</h>
                        <p className='mt-5'>{description}</p>
                    </div>
                    <div className='my-4'>
                        <h className="text-xl flex justify-center font-semibold">Tour Feature</h>
                        <ol className='grid grid-cols-2 justify-items-center'>
                            {tour_feature.map(tf => (
                                <li>{tf.desc}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h className="text-xl font-semibold">facility</h>
                        <ol className='mt-2'>
                            {
                                facility.map(fc => (
                                    <li className='flex items-center'><BsFillCaretRightFill className='text-lime-500'/> {fc.name}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className='my-5'>
                        <h className="text-xl font-semibold">Things_to_Carry</h>
                        <p>{Things_to_Carry}</p>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl'>Package Price: {price} BDT</h1>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-10'>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                4.95 out of 5
                            </p>
                        </Rating>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            1,745 global ratings
                        </p>
                        <Rating.Advanced percentFilled={70}>
                            5 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={17}>
                            4 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={8}>
                            3 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={4}>
                            2 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={1}>
                            1 star
                        </Rating.Advanced>
                    </div>
                    <div>
                        {
                            review.map(rv => (
                                <div className="flex flex-col w-full p-6 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                                    <div className="flex justify-between p-4">
                                        <div className="flex space-x-4">
                                            <div>
                                                <img src={rv.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{rv.name}</h4>
                                                <span className="text-xs dark:text-gray-400">2 days ago</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                                            <BsStarFill className='text-yellow-400' />
                                            <span className="text-xl font-bold text-gray-500">4.5</span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                        <p>{rv.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div>
                            {
                                user?.uid ? 
                                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                                    <div className="flex flex-col items-center w-full">
                                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                        <div className="flex flex-col items-center py-6 space-y-3">
                                            <span className="text-center">How was your experience?</span>
                                            <div className="flex space-x-3">
                                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                                    <BsStarFill className='text-yellow-400 text-xl' />
                                                </button>
                                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                                    <BsStarFill className='text-yellow-400 text-xl' />
                                                </button>
                                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                                    <BsStarFill className='text-yellow-400 text-xl' />
                                                </button>
                                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                                    <BsStarFill className='text-yellow-400 text-xl' />
                                                </button>
                                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                                    <BsStarFill className='text-yellow-400 text-xl' />
                                                </button>
                                            </div>
                                        </div>
                                        <form onSubmit={handleReview} className="flex flex-col w-full">
                                                <Textarea
                                                    id="text"
                                                    type="text"
                                                    name='review'
                                                    placeholder="Message..."
                                                    className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                                                    
                                                />
                                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 bg-sky-500 text-white">Write your feedback</button>
                                        </form>
                                    </div>
                                </div>
                                :
                                <Link to='/login' className='text-blue-600'>Please Login to Review Here</Link>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='wallet'>
                <div className="max-w-sm">
                    <Card>
                        <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                            Connect wallet
                        </h5>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Connect with one of our available wallet providers or create a new one.
                        </p>
                        <ul className="my-4 space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                >
                                    <GiFoxHead/>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        MetaMask
                                    </span>
                                    <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                                        Popular
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                >
                                    <BsCoin/>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Coinbase Wallet
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                >
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Opera Wallet
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                >
                                    <BsWallet/>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        WalletConnect
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                >
                                    <SiFortran/>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Fortmatic
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <Link
                                href="#"
                                className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                            >
                                Why do I need to connect with my wallet?
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;