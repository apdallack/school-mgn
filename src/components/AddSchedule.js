 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddSchedule.css';  
const AddSchedule = () => {
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
          <h2>Add Schedule</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter event name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter event name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter date.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                required
                type="time"
              />
              <Form.Control.Feedback type="invalid">
                Please enter time.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter location"
              />
              <Form.Control.Feedback type="invalid">
                Please enter location.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Schedule</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchedule;
