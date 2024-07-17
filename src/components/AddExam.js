 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddExam.css'; 

const AddExam = () => {
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
          <h2>Add Exam</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formExamName">
              <Form.Label>Exam Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter exam name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter exam name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formExamDate">
              <Form.Label>Exam Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter exam date.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formExamTime">
              <Form.Label>Exam Time</Form.Label>
              <Form.Control
                required
                type="time"
              />
              <Form.Control.Feedback type="invalid">
                Please enter exam time.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Exam</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddExam;
