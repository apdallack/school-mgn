// src/AddAttendance.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddAttendance.css';  

const AddAttendance = () => {
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
          <h2>Add Attendance</h2>
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

            <Form.Group controlId="formAttendanceDate">
              <Form.Label>Attendance Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter attendance date.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" required>
                <option value="">Select Status</option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select attendance status.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className='btn btn-block'>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAttendance;
