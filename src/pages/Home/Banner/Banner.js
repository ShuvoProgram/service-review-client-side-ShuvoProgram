import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel
                    leftControl="left"
                    rightControl="right"
                >
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."

                    />
                </Carousel>
            </div>

    );
};

export default Banner;