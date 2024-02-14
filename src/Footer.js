import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div>

            <Container className='mts5'>
                <div className='footer'>
                    <Col className="footer1">
                        <div className="explore1">

                            <div className="align-items-center  ">



                                <h3 className="mb-3">Address</h3>
                                <h6 className='mt-3'>Road no - 9, Kakatiya Hills, Jubilee Hills, Kavuri Hills</h6>
                                <h6 className='mt-3'>Hyderabad, Telangana, Madhapur: 500081</h6>

                            </div>

                            <Col>
                                <FaPhoneAlt />
                                <h6 className='mt-3'>+91 9703712609 (9am - 6pm , Monday - Saturday)</h6>
                                <h6 className='mt-3'>+91 8069068538 (9am - 6pm , Monday - Saturday)</h6>
                            </Col>
                            <h4 className='mt-3'>hello@cynohub.com</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="explore">


                            <h3 className="">Explore</h3>
                            <h5>Academics</h5>
                            <h5>Full Stack Developement Master Class</h5>
                            <h5>Robotics & Electronics Masterclass</h5>

                        </div>
                    </Col>
                    <Col>
                        <div className="explore">
                            {/* <FaIndianRupeeSign size={32} alt="Salary Trend Image" className="textcenter" /> */}

                            <h3 className="">About Us </h3>
                            <h5>Contact Us</h5>
                            <h5>Privacy Policy</h5>
                            <h5>Terms of service</h5>

                        </div>
                    </Col>
                </div>
                <h4 className='ml5'>© 2023 True Comet Edutech Private Limited</h4>
            </Container>
        </div>
    )
}

export default Footer