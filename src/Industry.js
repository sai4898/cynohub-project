import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { CiSquareChevLeft } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const Industry = () => {

    const [index, setIndex] = useState(0);

    const images = [
        'https://fullstack.cynohub.com/assets/5.png',
        'https://fullstack.cynohub.com/assets/6.png',
        'https://fullstack.cynohub.com/assets/7.png',
        'https://fullstack.cynohub.com/assets/8.png',
        'https://fullstack.cynohub.com/assets/9.png',
        'https://fullstack.cynohub.com/assets/10.png',
        'https://fullstack.cynohub.com/assets/11.png',
        'https://fullstack.cynohub.com/assets/12.png',
        'https://fullstack.cynohub.com/assets/13.png',
        'https://fullstack.cynohub.com/assets/14.png',
        'https://fullstack.cynohub.com/assets/15.png',
        'https://fullstack.cynohub.com/assets/16.png',
        'https://fullstack.cynohub.com/assets/17.png',
        'https://fullstack.cynohub.com/assets/18.png',
        'https://fullstack.cynohub.com/assets/19.png',
        'https://fullstack.cynohub.com/assets/20.png',
        'https://fullstack.cynohub.com/assets/21.png',
        'https://fullstack.cynohub.com/assets/22.png',
        'https://fullstack.cynohub.com/assets/23.png',
        'https://fullstack.cynohub.com/assets/24.png'

    ];
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


    return (
        <>

            <Container className='m6'>
                <Row className="align-items-center text-center">
                 <h1> Learn from the best in the industry</h1>

                    <Col md={4}>
                        <Button variant="secondary" onClick={handlePrevious}><CiSquareChevLeft /></Button>
                    </Col>
                    <Col md={4}>
                        <Carousel activeIndex={index} onSelect={handleSelect} className="text-center">
                            {images.map((imageUrl, idx) => (
                                <Carousel.Item key={idx}>
                                    <img src={imageUrl} className="d-inline-block mr-3 h-25 w-25" alt={`Image ${idx + 1}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col md={4}>
                        <Button variant="secondary" onClick={handleNext}><FaAngleRight /></Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Industry