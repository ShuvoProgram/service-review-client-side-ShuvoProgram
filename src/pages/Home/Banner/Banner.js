import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = () => {
    const images = [
        { id: 1, img: 'https://i.ibb.co/rQts0Cw/sundarban.jpg'},
        { id: 2, img: 'https://i.ibb.co/vB6zKj0/cox-sImg.jpg'},
        { id: 3, img: 'https://i.ibb.co/g9mW0Kp/rangamati.jpg'},
        { id: 4, img: 'https://i.ibb.co/TWbh7C6/saint-martin-s-island.jpg'},
        { id: 5, img: 'https://i.ibb.co/4sn6nGB/syhlet.jpg'},
        { id: 6, img: 'https://i.ibb.co/HCjBRyc/Tanguar-Haor-o-jadukata-nodi.jpg'},
    ]
    return (
        <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                images.map(img => (
                    <SwiperSlide>
                        <div className='relative w-full  bg-cover' style={{ backgroundImage: `url(${img.img})`, height: "600px" }}>
                            <div className='text-white h-screen' style={{ backgroundColor: "rgba(0, 0, 0, 0.555)"}}>
                                <h1 className='absolute top-40 left-24 text-5xl'>We Provide Best Tour Service. <br /> 
                                To Enjoy Your Destination Journey. <br /> We Protect Your Safety</h1>
                                <button className='absolute p-4 bg-sky-500 rounded-lg font-semibold text-white bottom-52 left-28'>Get Packages</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Banner;