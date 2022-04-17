import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'

import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
const Banner = () => {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '640px' }}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To Learn Arabic With Noor !</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '640px' }}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>You haven't signed up yet. What are You Waiting for? Sign Up quickly</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '640px' }}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>If you want to learn Arabic with Noor , choose a package of your choice without delay</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}
export default Banner