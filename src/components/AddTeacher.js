 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import '../Assets/TeacherForm.css'; 
const AddTeacher = () => {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // const handleModalClose = () => setShowModal(false);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1>Add Teacher </h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
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

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter age"
              />
              <Form.Control.Feedback type="invalid">
                Please enter an age.
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
                Please enter a subject.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Enter address"
              />
              <Form.Control.Feedback type="invalid">
                Please enter an address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
              />
            </Form.Group>

            <Button className='btn btn-block' type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
 
    </Container>
  );
};

export default AddTeacher;
