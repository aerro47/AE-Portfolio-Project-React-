import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
    return (
        <Carousel pause='hover'>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="./images/herbalife image.jpg"
            alt="Image of Herbalife"
            height='700px'
            />
            <Carousel.Caption className='carousel-description'>
            <h3>Fast track your start to a healthy life with Herbalife</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="./images/image of herbalife shake.jpg"
            alt="Picture of colorful shakes"
            height='700px'
            />
            <Carousel.Caption className='carousel-description'>
            <h3>Over 50+ different shakes!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="./images/people drinking shakes.jpg"
            alt="Photo of members"
            height='700px'
            />
            <Carousel.Caption className='carousel-description'>
            <h3>Become part of the family</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;