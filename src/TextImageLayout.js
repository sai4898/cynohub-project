import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TextAndImageLayout() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <Container>
            <Row className="align-items-center">
                <h2>What does <img src='https://i.ibb.co/Q850hh4/1588088521729-removebg-preview.png' style={{ width: '80px', height: '80px' }} />Say about Full Stack</h2>
                <Col>
                    <div className="text-container ">
                        <h5 className='h15' >HTML & CSS Developer Salary</h5>
                        <h5 className='h15'> Front End Developer Salary</h5>
                        <h5 className='h15'> Backend Developer Salary</h5>
                        <h5 className='h15'>Full Stack Developer Salary</h5>
                        <Button variant="primary" onClick={scrollToTop} className='w-75'>Enroll Now</Button>
                    </div>
                </Col>
                <Col>
                    <img src="https://www.cynohub.com/wp-content/uploads/2022/12/5rev-2-1.png" alt="Cynohub" className='image' />
                </Col>
            </Row>
        </Container>
    );
}

export default TextAndImageLayout;
