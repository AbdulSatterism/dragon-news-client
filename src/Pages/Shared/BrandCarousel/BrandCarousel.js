import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import news1 from '../../../assets/Brand/news1.jpeg'
import news2 from '../../../assets/Brand/news2.jpeg'


const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={news1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={news2}
                    alt="Second slide"
                />


            </Carousel.Item>

        </Carousel>
    );
};

export default BrandCarousel;