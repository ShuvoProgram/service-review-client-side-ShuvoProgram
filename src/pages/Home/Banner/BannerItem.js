import React from 'react';

const BannerItem = ({img}) => {
    return (
        <>
            <img className='h-5/6 w-full'
                src={img.img}
                alt="..."

            />
        </>
    );
};

export default BannerItem;