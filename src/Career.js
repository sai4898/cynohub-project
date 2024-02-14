import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Testimonials() {
  return (
    <Container >
      <Row className='' >
        {/* First Testimonial Set */}
        <Col md={4} className="testimonial-set">
          <div className="testimonial-item">
            <Image src="https://example.com/image1.jpg" fluid />
            <h4>Srikanth Reddy</h4>

          </div>
        </Col>

        {/* Second Testimonial Set */}
        <Col md={4} className="testimonial-set">
          <div className="testimonial-item">
            <Image src="https://example.com/image2.jpg" fluid />

            <p>15 LPA</p>

          </div>
        </Col>

        {/* Third Testimonial Set */}
        <Col md={4} className="testimonial-set">
          <div className="testimonial-item">
            <Image src="https://example.com/image3.jpg" fluid />

            <p>7 Months</p>

          </div>
        </Col>
        <h3 style={{ border: '3px red solid', width: '932px' }}></h3>
      </Row>
    </Container>
  );
}

export default Testimonials;
