import { Carousel } from 'flowbite-react';
import React from 'react';
import BannerItem from './BannerItem';

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
            <div className="h-full sm:h-64 xl:h-80 2xl:h-96">
                <Carousel
                    leftControl="left"
                    rightControl="right"
                >
                    {
                        images.map(img => <BannerItem key={img.id} img={img}/>)
                    }
                </Carousel>
            </div>

    );
};

export default Banner;