 import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const salariesData = [
  { id: 1, employeeName: 'John Doe', amount: 5000, paymentDate: '2024-07-31' },
  { id: 2, employeeName: 'Jane Smith', amount: 7000, paymentDate: '2024-07-30' },
  { id: 3, employeeName: 'Abdi Hassan', amount: 6000, paymentDate: '2024-07-31' },
  { id: 4, employeeName: 'Halima Ali', amount: 5500, paymentDate: '2024-07-29' },
  { id: 5, employeeName: 'Mohamed Ahmed', amount: 6500, paymentDate: '2024-07-30' },
  { id: 6, employeeName: 'Ayan Jama', amount: 5800, paymentDate: '2024-07-31' },
  { id: 7, employeeName: 'Yusuf Abdi', amount: 6200, paymentDate: '2024-07-28' },
  { id: 8, employeeName: 'Nasra Mohamed', amount: 5300, paymentDate: '2024-07-29' },
  { id: 9, employeeName: 'Hassan Ali', amount: 5900, paymentDate: '2024-07-31' },
  { id: 10, employeeName: 'Fadumo Hussein', amount: 5600, paymentDate: '2024-07-28' },
  { id: 11, employeeName: 'Ibrahim Farah', amount: 6400, paymentDate: '2024-07-30' },
  { id: 12, employeeName: 'Amina Yusuf', amount: 5700, paymentDate: '2024-07-29' },
  { id: 13, employeeName: 'Ahmed Jama', amount: 6100, paymentDate: '2024-07-31' },
  { id: 14, employeeName: 'Nimo Abdi', amount: 5400, paymentDate: '2024-07-28' },
  { id: 15, employeeName: 'Adan Hassan', amount: 6000, paymentDate: '2024-07-30' },
  { id: 16, employeeName: 'Hawo Ali', amount: 5700, paymentDate: '2024-07-29' },
  { id: 17, employeeName: 'Omar Ibrahim', amount: 6300, paymentDate: '2024-07-31' },
  { id: 18, employeeName: 'Fatima Ahmed', amount: 5500, paymentDate: '2024-07-28' },
  { id: 19, employeeName: 'Abdirahman Yusuf', amount: 5900, paymentDate: '2024-07-30' },
  { id: 20, employeeName: 'Asma Jama', amount: 5800, paymentDate: '2024-07-29' },
];


const ReportSalaries = () => {
  const [salaries, setSalaries] = useState(salariesData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editSalary, setEditSalary] = useState(null);

  const handleEdit = (salary) => {
    setEditSalary(salary);
    setShowEditModal(true);
  };

  const handleSave = (editedSalary) => {
    const updatedSalaries = salaries.map((salary) =>
      salary.id === editedSalary.id ? editedSalary : salary
    );
    setSalaries(updatedSalaries);
    setShowEditModal(false);
  };

  const handleDelete = (salaryId) => {
    const updatedSalaries = salaries.filter((salary) => salary.id !== salaryId);
    setSalaries(updatedSalaries);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditSalary(null);
  };

  return (
    <div>
      <h2>Salaries Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Amount</th>
            <th>Payment Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary, index) => (
            <tr key={salary.id}>
              <td>{index + 1}</td>
              <td>{salary.employeeName}</td>
              <td>{salary.amount}</td>
              <td>{salary.paymentDate}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(salary)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(salary.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmployeeName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editSalary ? editSalary.employeeName : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formSalaryAmount">
              <Form.Label>Salary Amount</Form.Label>
              <Form.Control
                type="number"
                defaultValue={editSalary ? editSalary.amount : ''}
              />
            </Form.Group>

            <Form.Group controlId="formPaymentDate">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={editSalary ? editSalary.paymentDate : ''}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editSalary)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportSalaries;
