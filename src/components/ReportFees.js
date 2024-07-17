 import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const feesData = [
  { id: 1, studentName: 'Ayaan Abdi', amount: 500, dueDate: '2024-07-15' },
  { id: 2, studentName: 'Farah Hassan', amount: 700, dueDate: '2024-06-30' },
  { id: 3, studentName: 'Khadija Omar', amount: 600, dueDate: '2024-05-20' },
  { id: 4, studentName: 'Ahmed Nur', amount: 800, dueDate: '2024-08-10' },
  { id: 5, studentName: 'Hodan Mohamed', amount: 450, dueDate: '2024-09-05' },
  { id: 6, studentName: 'Layla Ali', amount: 500, dueDate: '2024-07-25' },
  { id: 7, studentName: 'Mahamud Ismail', amount: 750, dueDate: '2024-10-30' },
  { id: 8, studentName: 'Nasteho Yusuf', amount: 650, dueDate: '2024-12-12' },
  { id: 9, studentName: 'Saed Abdirahman', amount: 900, dueDate: '2024-11-01' },
  { id: 10, studentName: 'Fatima Hussein', amount: 550, dueDate: '2024-11-15' },
  { id: 11, studentName: 'Abdiwahab Ahmed', amount: 500, dueDate: '2024-07-15' },
  { id: 12, studentName: 'Zahra Jama', amount: 700, dueDate: '2024-06-30' },
  { id: 13, studentName: 'Mohamed Barre', amount: 600, dueDate: '2024-05-20' },
  { id: 14, studentName: 'Filsan Isse', amount: 800, dueDate: '2024-08-10' },
  { id: 15, studentName: 'Amin Abdullahi', amount: 450, dueDate: '2024-09-05' },
  { id: 16, studentName: 'Najma Osman', amount: 500, dueDate: '2024-07-25' },
  { id: 17, studentName: 'Hussein Adan', amount: 750, dueDate: '2024-10-30' },
  { id: 18, studentName: 'Muna Hassan', amount: 650, dueDate: '2024-12-12' },
  { id: 19, studentName: 'Yasin Hassan', amount: 900, dueDate: '2024-11-01' },
  { id: 20, studentName: 'Hawa Abdirizak', amount: 550, dueDate: '2024-11-15' },
  { id: 21, studentName: 'Idil Mohamed', amount: 500, dueDate: '2024-07-15' },
  { id: 22, studentName: 'Salma Abdi', amount: 700, dueDate: '2024-06-30' },
  { id: 23, studentName: 'Yusuf Noor', amount: 600, dueDate: '2024-05-20' },
  { id: 24, studentName: 'Ruqiya Abdullahi', amount: 800, dueDate: '2024-08-10' },
  { id: 25, studentName: 'Khadar Hassan', amount: 450, dueDate: '2024-09-05' },
  { id: 26, studentName: 'Sagal Ali', amount: 500, dueDate: '2024-07-25' },
  { id: 27, studentName: 'Liban Mohamed', amount: 750, dueDate: '2024-10-30' },
  { id: 28, studentName: 'Sahra Hussein', amount: 650, dueDate: '2024-12-12' },
  { id: 29, studentName: 'Jama Abdulkadir', amount: 900, dueDate: '2024-11-01' },
  { id: 30, studentName: 'Asli Ahmed', amount: 550, dueDate: '2024-11-15' },
  { id: 31, studentName: 'Asha Yusuf', amount: 500, dueDate: '2024-07-15' },
  { id: 32, studentName: 'Ali Hassan', amount: 700, dueDate: '2024-06-30' },
  { id: 33, studentName: 'Nimo Adan', amount: 600, dueDate: '2024-05-20' },
  { id: 34, studentName: 'Suleiman Hassan', amount: 800, dueDate: '2024-08-10' },
  { id: 35, studentName: 'Faduma Omar', amount: 450, dueDate: '2024-09-05' },
  { id: 36, studentName: 'Maryan Mohamed', amount: 500, dueDate: '2024-07-25' },
  { id: 37, studentName: 'Anas Abdullahi', amount: 750, dueDate: '2024-10-30' },
  { id: 38, studentName: 'Hodan Abdi', amount: 650, dueDate: '2024-12-12' },
  { id: 39, studentName: 'Nasir Osman', amount: 900, dueDate: '2024-11-01' },
  { id: 40, studentName: 'Amina Ahmed', amount: 550, dueDate: '2024-11-15' },
  { id: 41, studentName: 'Said Mohamed', amount: 500, dueDate: '2024-07-15' },
  { id: 42, studentName: 'Mariam Ali', amount: 700, dueDate: '2024-06-30' },
  { id: 43, studentName: 'Abdirahman Nur', amount: 600, dueDate: '2024-05-20' },
  { id: 44, studentName: 'Habiba Hussein', amount: 800, dueDate: '2024-08-10' },
  { id: 45, studentName: 'Jibril Isse', amount: 450, dueDate: '2024-09-05' },
  { id: 46, studentName: 'Fartun Omar', amount: 500, dueDate: '2024-07-25' },
  { id: 47, studentName: 'Mahad Hassan', amount: 750, dueDate: '2024-10-30' },
  { id: 48, studentName: 'Fadumo Abdi', amount: 650, dueDate: '2024-12-12' },
  { id: 49, studentName: 'Jama Osman', amount: 900, dueDate: '2024-11-01' },
  { id: 50, studentName: 'Kawsar Hussein', amount: 550, dueDate: '2024-11-15' },
];

const ReportFees = () => {
  const [fees, setFees] = useState(feesData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFee, setEditFee] = useState(null);

  const handleEdit = (fee) => {
    setEditFee(fee);
    setShowEditModal(true);
  };

  const handleSave = (editedFee) => {
    const updatedFees = fees.map((fee) =>
      fee.id === editedFee.id ? editedFee : fee
    );
    setFees(updatedFees);
    setShowEditModal(false);
  };

  const handleDelete = (feeId) => {
    const updatedFees = fees.filter((fee) => fee.id !== feeId);
    setFees(updatedFees);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditFee(null);
  };

  return (
    <div>
      <h2>Fees Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={fee.id}>
              <td>{index + 1}</td>
              <td>{fee.studentName}</td>
              <td>{fee.amount}</td>
              <td>{fee.dueDate}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(fee)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(fee.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Fee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editFee ? editFee.studentName : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formFeeAmount">
              <Form.Label>Fee Amount</Form.Label>
              <Form.Control
                type="number"
                defaultValue={editFee ? editFee.amount : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={editFee ? editFee.dueDate : ''}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editFee)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportFees;
