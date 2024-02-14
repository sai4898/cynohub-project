import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { CiSquareChevLeft } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const Support = () => {

    const [index, setIndex] = useState(0);

    const urls = [
        'https://fullstack.cynohub.com/assets/1.png',
        'https://fullstack.cynohub.com/assets/2.png',
        'https://fullstack.cynohub.com/assets/3.png',
        'https://fullstack.cynohub.com/assets/4.png'
     ]

     const images = [
                'https://www.cynohub.com/wp-content/uploads/2023/02/download-2.png',
                'https://www.cynohub.com/wp-content/uploads/2023/01/download-1-2.png',
                'https://www.cynohub.com/wp-content/uploads/2023/02/images-1-1.png',
                'https://www.cynohub.com/wp-content/uploads/2023/02/download-2.png',
                'https://www.cynohub.com/wp-content/uploads/2023/02/images-1.png',
                'https://www.cynohub.com/wp-content/uploads/2023/02/download-2.png'
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

    <Container className='mt-8'>
            <Row className="align-items-center text-center">
                <h1>Recognized & Supported by</h1>
                    {urls.map((img,index) => (
                        <Col key={index} xs={4} md={4} lg={2} className="text-center mt-4 ">
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}
                            
                            style={{ width: '110px', marginLeft:'290px', height: '160px' }} 
                            />
                        </Col>
                    ))}

                    <h1> In the Media</h1>

            <Col md={4}>
                    <Button variant="secondary" onClick={handlePrevious}><CiSquareChevLeft /></Button>
                </Col>
                    <Col md={4}>
                        <Carousel activeIndex={index} onSelect={handleSelect} className="text-center">
                            {images.map((imageUrl, idx) => (
                                <Carousel.Item key={idx}>
                                    <img src={imageUrl}  className="d-inline-block mr-3 h-25 w-25" alt={`Image ${idx + 1}`} />
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

export default Support