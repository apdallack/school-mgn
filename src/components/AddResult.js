 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddResult.css'; 
const AddResult = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>Add Result</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter student name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter student name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter subject"
              />
              <Form.Control.Feedback type="invalid">
                Please enter subject.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMarks">
              <Form.Label>Marks Obtained</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter marks obtained"
              />
              <Form.Control.Feedback type="invalid">
                Please enter marks obtained.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Result</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddResult;
