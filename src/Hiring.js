import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

function Hiring() {

    // Array of image URLs
    const imgs = [
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

    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Container>
            <Row className="align-items-center text-center  mt-5 ">
                <h1 style={{ fontSize: '50px' }}>Get Placed with more than 150+ Hiring Partners</h1>

                {imgs.map((img, index) => (
                    <Col key={index} xs={4} md={4} lg={3} className="text-center mt-4">
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}

                            style={{ width: '114px', height: '77px' }}
                        />
                    </Col>
                ))}
                <div className="align-items-center  ">

                    <Button variant="primary" onClick={scrollToTop} className=' m-5'>
                        <FaPhoneAlt />   Book Free Guidance Session
                    </Button>
                </div>
            </Row>
        </Container>
    );
}

export default Hiring;
