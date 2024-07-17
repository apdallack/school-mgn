 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddSubject.css'; 

const AddSubject = () => {
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
          <h2>Add Subject</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formSubjectName">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter subject name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter subject name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSubjectCode">
              <Form.Label>Subject Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter subject code"
              />
              <Form.Control.Feedback type="invalid">
                Please enter subject code.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSubjectDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
              />
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Subject</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSubject;
