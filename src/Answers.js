// Answers.jsx

import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Answers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={toggleAccordion}>
          How Will I Get Placement Assistance?
          <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            This Full Stack Java Developer Program can lead to jobs such as Full Stack Developer, Front-end Engineer, Full Stack Engineer, and Software Engineer.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Answers;
