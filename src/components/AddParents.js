 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddParents.css'; 

const AddParents = () => {
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
          <h2>Add Parents</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formParentName">
              <Form.Label>Parent's Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter parent's name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter parent's name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formParentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formParentPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
              />
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Parents</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddParents;
