 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddEvent.css';  

const AddEvent = () => {
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
          <h2>Add Event</h2>
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

            <Form.Group controlId="formEventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter event date.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEventTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                required
                type="time"
              />
              <Form.Control.Feedback type="invalid">
                Please enter event time.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'> Add Event</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEvent;
