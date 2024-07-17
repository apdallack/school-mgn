 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddStudent.css';  

const AddStudent = () => {
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
    <Container className="form-container">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>Add Student</h2>
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

            <Form.Group controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control as="select" required>
                <option value="">Select Grade</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                {/* Add more options as needed */}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a grade.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter address"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
              />
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Student</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStudent;
