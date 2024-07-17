// src/AddClass.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddClass.css'; 
const AddClass = () => {
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
          <h2>Add Class</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formClassName">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter class name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter class name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formClassTeacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter teacher's name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter teacher's name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formClassRoom">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter room number"
              />
              <Form.Control.Feedback type="invalid">
                Please enter room number.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Class</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddClass;
