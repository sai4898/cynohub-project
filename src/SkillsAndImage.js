import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

function SkillsAndImages() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [clickedText, setClickedText] = useState(null);
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [clickedText1, setClickedText1] = useState(null);

    const imagesMap = {
        'HTML & CSS': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim.gif',
        'JavaScript': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5.gif',
        'Data Structures & Algorithms': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-1.gif',
        'React JS': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-2.gif',
        'Mongo DB, mySQL': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-4-1.gif',
        'Express JS, Node JS': 'https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5-1.gif',

      
    };

    const imagesMap1 = {
        'Learn Professional Communication': 'https://www.cynohub.com/wp-content/uploads/2022/12/1-2.png',
        'Job Traning' : 'https://www.cynohub.com/wp-content/uploads/2022/11/1234.jpg',
        'Interview Preparation': 'https://www.cynohub.com/wp-content/uploads/2022/11/859.jpg',
        'Mock Interviews': 'https://www.cynohub.com/wp-content/uploads/2022/12/4.png'
    }

    const handleTextClick = (text) => {
        setClickedText(text)
        setSelectedImage(imagesMap[text]);
    };

    const handleTextClick1 = (texts) => {
        setClickedText1(texts)
        setSelectedImage1(imagesMap1[texts]);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <Container className='mt-8'>
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="text-lefts">
                        <h1 style={{fontSize:'44px'}}>Learn the <spam style={{color:'orange',}}>highest paid skills</spam> in   the market :</h1>
                        <ul>
                            {Object.keys(imagesMap).map((text, index) => (
                                 <li key={index}
                                 onClick={() => handleTextClick(text)}
                                 style={{ cursor: 'pointer', color: text === clickedText ? 'orange' : 'black' }}
                             >
                                   <h3>{text}</h3>
                             </li>
                            ))}
                        </ul>
                        <Button variant='primary' onClick={scrollToTop} style={{marginLeft:'60px'}}>  <FaPhoneAlt /> Book Free Guidance Session</Button>
                    </div>
                </Col>
                <Col md={6}>
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected Image" className="img-fluid" />
                    )}
                </Col>

              <div style={{margin:'20px'}}></div>


                <Col md={6} >
                    {selectedImage1 && (
                        <img src={selectedImage1} alt="Selected Image" className="img-fluid" />
                    )}
                </Col>

                <Col md={6}>
                    <div className="text-rightf">
                        <h3 style={{fontSize:'59px',marginBottom:'30px'}}>Be Industry-Ready From Day-One :</h3>
                        <ul>
                            {Object.keys(imagesMap1).map((texts, index) => (
                                 <li key={index}
                                 onClick={() => handleTextClick1(texts)}
                                 style={{ cursor: 'pointer', color: texts === clickedText1 ? 'orange' : 'black' }}
                             >
                                 <h3>{texts}</h3>
                             </li>
                            ))}
                        </ul>
                        <Button variant='primary' onClick={scrollToTop}  style={{marginLeft:'40px'}}>   <FaPhoneAlt /> Book Free Guidance Session</Button>
                    </div>
                </Col>   
            </Row>
        </Container>
    );
}

export default SkillsAndImages;
