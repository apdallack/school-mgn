 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Assets/AddSalary.css';  
const AddSalary = () => {
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
          <h2>Add Salary</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formEmployeeName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter employee name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter employee name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSalaryAmount">
              <Form.Label>Salary Amount</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter salary amount"
              />
              <Form.Control.Feedback type="invalid">
                Please enter salary amount.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPaymentDate">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control
                required
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please enter payment date.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit"className='btn btn-block'>Add Salary</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSalary;
