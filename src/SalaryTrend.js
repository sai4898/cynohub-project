import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaIndianRupeeSign } from "react-icons/fa6";
const SalaryTrend = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col className="salary-trend">
                    <div >
                        <FaIndianRupeeSign size={32} alt="Salary Trend Image" className="textcenter" />

                        <h2 className="salary-info">Salary Trend</h2>
                        <p className="salary-info">Salary Trend: A Full Stack Developer earns an average of 12 lakhs a year, but with the sufficient skills and experience, the prospects of earning much more are quite strong.</p>
                    </div>
                </Col>
                <Col>
                    <div className="salary-trend">
                        <FaIndianRupeeSign size={32} alt="Salary Trend Image" className="textcenter" />

                        <h2 className="salary-info">Annual Growth</h2>
                        <p className="salary-info">Salary Trend: A Full Stack Developer earns an average of 12 lakhs a year, but with the sufficient skills and experience, the prospects of earning much more are quite strong.</p>
                    </div>
                </Col>
                <Col>
                    <div className="salary-trend">
                        <FaIndianRupeeSign size={32} alt="Salary Trend Image" className="textcenter" />

                        <h2 className="salary-info">58% Average Salary </h2>
                        <p className="salary-info">Salary Trend: A Full Stack Developer earns an average of 12 lakhs a year, but with the sufficient skills and experience, the prospects of earning much more are quite strong.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SalaryTrend;
