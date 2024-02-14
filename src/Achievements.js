import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Achievements() {
    // Array of image URLs
    const imageUrls = [
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/654c681b6d84b03892958f9f1d68d41c.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/abecc4e7636e16973e19b5ff653b1a04.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/1e6e6cbf75b1a2301d0b3232aae67cf0.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/1396d8b2916747e5e974e9e7046868bd.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/28999f02ae8085b4a16045d16a2c19e6.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/982d914085d480cd09984408e1c187a7.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/9c71d2ed3ab7833336720db23be5af81.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/db794a449cf06380160f8f41a3c8c48c.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/d16aa0e8010fe6e7c728b2b0ce5bf50f.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/db794a449cf06380160f8f41a3c8c48c.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/db794a449cf06380160f8f41a3c8c48c.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/41d630bbabf34ca5be29ca09e4247ad7.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/32ba25bac636f63a79b28cb552de6990.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/ec183d196cf4f675d044402c56a047f3.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/ca7677aa1d989dbcb0c755418ae530f3.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/73824f468040dfaeb65e0baf63b27beb.jpg',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/0ee296b71ff2dad84f5cd47ab77ae89e.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/9bf672b5c922bc3b422a4f16253be0de.png',


    ];

    const imgs = [
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/ba9b225108d80e3f1f5aad9aec011311.png',

        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/f83ba072182681d47b66afabb193944b.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/3ef5d7786387c5ba33f83bf0dc82dc80.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/ce7341b36a90744cd23416756303a018.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/06fd7fa93532dbddb63c782f784df5f9.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/185302cdf454b37644e403dcc7564255.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/cf2d15796ec4991ec8ade61d6956c713.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/ab0414fd6acbc18c9ae570d644280aee.png',
        'https://cynohub-full-stack-test-0001.my.canva.site/html-internship-page/images/e0d818b14c3e7d25d2bffb3c2b338190.png'
    ]

    return (
        <Container className='color'>

            <div className='hub '>
                <h1>CodHub</h1>
                <p className='p1'></p>
                <h1>1000+ JOINRES Community Leaders</h1>
            </div>


            <Row>
                {imageUrls.map((url, index) => (
                    <Col key={index} xs={4} md={1} lg={2} className="text-center mt-4">
                        <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="img-fluid rounded-circle"
                            style={{ width: '140px', height: '120px' }}
                        />


                    </Col>

                ))}

            </Row>
            <Row>

                {imgs.map((img, index) => (
                    <Col key={index} xs={4} md={4} lg={3} className="text-center mt-4">
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}

                            style={{ width: '100px', height: '80px' }}
                        />


                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Achievements;
