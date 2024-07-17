 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddFee.css';  
const AddFee = () => {
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
          <h2>Add Fee</h2>
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

            <Form.Group controlId="formFeeAmount">
              <Form.Label>Fee Amount</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter fee amount"
              />
              <Form.Control.Feedback type="invalid">
                Please enter fee amount.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter due date.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Fee</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddFee;
