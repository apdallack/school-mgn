import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const parentsData = [
  { id: 1, name: 'Abdiqani Ali', email: 'abdiqani.ali@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Amina Abdullahi', email: 'amina.abdullahi@example.com', phone: '234-567-8901' },
  { id: 3, name: 'Mohamed Hussein', email: 'mohamed.hussein@example.com', phone: '345-678-9012' },
  { id: 4, name: 'Fatuma Osman', email: 'fatuma.osman@example.com', phone: '456-789-0123' },
  { id: 5, name: 'Yusuf Ahmed', email: 'yusuf.ahmed@example.com', phone: '567-890-1234' },
  { id: 6, name: 'Halima Jama', email: 'halima.jama@example.com', phone: '678-901-2345' },
  { id: 7, name: 'Nimo Abdi', email: 'nimo.abdi@example.com', phone: '789-012-3456' },
  { id: 8, name: 'Ahmed Yusuf', email: 'ahmed.yusuf@example.com', phone: '890-123-4567' },
  { id: 9, name: 'Hawa Hassan', email: 'hawa.hassan@example.com', phone: '901-234-5678' },
  { id: 10, name: 'Abdirahman Mohamed', email: 'abdirahman.mohamed@example.com', phone: '012-345-6789' },
  { id: 11, name: 'Amira Ali', email: 'amira.ali@example.com', phone: '123-456-7890' },
  { id: 12, name: 'Ibrahim Omar', email: 'ibrahim.omar@example.com', phone: '234-567-8901' },
  { id: 13, name: 'Nasra Abdi', email: 'nasra.abdi@example.com', phone: '345-678-9012' },
  { id: 14, name: 'Adan Hassan', email: 'adan.hassan@example.com', phone: '456-789-0123' },
  { id: 15, name: 'Maryan Ali', email: 'maryan.ali@example.com', phone: '567-890-1234' },
  { id: 16, name: 'Aliya Ibrahim', email: 'aliya.ibrahim@example.com', phone: '678-901-2345' },
  { id: 17, name: 'Mustafa Abdi', email: 'mustafa.abdi@example.com', phone: '789-012-3456' },
  { id: 18, name: 'Aisha Mohamed', email: 'aisha.mohamed@example.com', phone: '890-123-4567' },
  { id: 19, name: 'Abdullahi Ahmed', email: 'abdullahi.ahmed@example.com', phone: '901-234-5678' },
  { id: 20, name: 'Haniya Hassan', email: 'haniya.hassan@example.com', phone: '012-345-6789' },
  { id: 21, name: 'Nadia Osman', email: 'nadia.osman@example.com', phone: '123-456-7890' },
  { id: 22, name: 'Abdikadir Jama', email: 'abdikadir.jama@example.com', phone: '234-567-8901' },
  { id: 23, name: 'Ayan Yusuf', email: 'ayan.yusuf@example.com', phone: '345-678-9012' },
  { id: 24, name: 'Ali Hassan', email: 'ali.hassan@example.com', phone: '456-789-0123' },
  { id: 25, name: 'Fardowsa Abdi', email: 'fardowsa.abdi@example.com', phone: '567-890-1234' },
  { id: 26, name: 'Omar Ali', email: 'omar.ali@example.com', phone: '678-901-2345' },
  { id: 27, name: 'Safiya Ibrahim', email: 'safiya.ibrahim@example.com', phone: '789-012-3456' },
  { id: 28, name: 'Aliya Abdi', email: 'aliya.abdi@example.com', phone: '890-123-4567' },
  { id: 29, name: 'Hussein Yusuf', email: 'hussein.yusuf@example.com', phone: '901-234-5678' },
  { id: 30, name: 'Nimco Osman', email: 'nimco.osman@example.com', phone: '012-345-6789' },
  { id: 31, name: 'Ahmed Hassan', email: 'ahmed.hassan@example.com', phone: '123-456-7890' },
  { id: 32, name: 'Amina Jama', email: 'amina.jama@example.com', phone: '234-567-8901' },
];

const ReportParents = () => {
  const [parents, setParents] = useState(parentsData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editParent, setEditParent] = useState(null);

  const handleEdit = (parent) => {
    setEditParent(parent);
    setShowEditModal(true);
  };

  const handleSave = (editedParent) => {
    const updatedParents = parents.map((parent) =>
      parent.id === editedParent.id ? editedParent : parent
    );
    setParents(updatedParents);
    setShowEditModal(false);
  };

  const handleDelete = (parentId) => {
    const updatedParents = parents.filter((parent) => parent.id !== parentId);
    setParents(updatedParents);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditParent(null);
  };

  return (
    <div>
      <h2>Parents Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent, index) => (
            <tr key={parent.id}>
              <td>{index + 1}</td>
              <td>{parent.name}</td>
              <td>{parent.email}</td>
              <td>{parent.phone}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(parent)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(parent.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Parent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formParentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editParent ? editParent.name : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formParentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={editParent ? editParent.email : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formParentPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                defaultValue={editParent ? editParent.phone : ''}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editParent)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportParents;
