
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function JobAssistanceProgram() {

  const Data = [
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap-2.png',
      title: ' 1:1 Mentor Support'
    },
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap-5.png',
      title: 'Join 1000+ Community '
    },
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap-4.png',
      title: 'Doubt Clarification '
    },
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap.png',
      title: 'Placement Support'
    },
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap-3.png',
      title: '150+ Hiring Partners'
    },
    {
      url: 'https://www.cynohub.com/wp-content/uploads/2022/12/Bitmap-3.png',
      title: 'No Cost EMI'
    }
  ]

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2><spam style={{ color: 'orange', }}>100% </spam> Job Assistance</h2>
          <h1>Learn  <spam style={{ color: 'orange', }}>Full Stack </spam> Development</h1>
          <h1 style={{ fontSize: '18px', margin: '20px 0 20px 20px' }}>Land a Job as a software developer in 5 Months</h1>
          <ul >
            {Data.map((url, key) => (
              <li className='mt-2'>
                <img src={url.url} style={{ marginRight: '10px' }} />
                {url.title}
              </li>
            ))}

          </ul>
        </Col>
      </Row>
    </Container>
  );
}



export default JobAssistanceProgram;
