import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const classesData = [
  { id: 1, name: 'Mathematics', teacher: 'Mr. Ahmed', room: '101' },
  { id: 2, name: 'Science', teacher: 'Ms. Fatima', room: '102' },
  { id: 3, name: 'History', teacher: 'Mr. Mohamed', room: '103' },
  { id: 4, name: 'Geography', teacher: 'Ms. Ayan', room: '104' },
  { id: 5, name: 'Physics', teacher: 'Mr. Yusuf', room: '105' },
  { id: 6, name: 'Chemistry', teacher: 'Ms. Khadija', room: '106' },
  { id: 7, name: 'Biology', teacher: 'Mr. Abdirahman', room: '107' },
  { id: 8, name: 'English', teacher: 'Ms. Layla', room: '108' },
  { id: 9, name: 'Literature', teacher: 'Mr. Ismail', room: '109' },
  { id: 10, name: 'Art', teacher: 'Ms. Hamdi', room: '110' },
  { id: 11, name: 'Music', teacher: 'Mr. Zahra', room: '111' },
  { id: 12, name: 'Physical Education', teacher: 'Ms. Ali', room: '112' },
  { id: 13, name: 'Computer Science', teacher: 'Mr. Maryam', room: '113' },
  { id: 14, name: 'Economics', teacher: 'Ms. Abdi', room: '114' },
  { id: 15, name: 'Sociology', teacher: 'Mr. Nasra', room: '115' },
  { id: 16, name: 'Psychology', teacher: 'Ms. Farah', room: '116' },
  { id: 17, name: 'Philosophy', teacher: 'Mr. Hassan', room: '117' },
  { id: 18, name: 'Political Science', teacher: 'Ms. Asha', room: '118' },
  { id: 19, name: 'Statistics', teacher: 'Mr. Salma', room: '119' },
  { id: 20, name: 'Business Studies', teacher: 'Ms. Omar', room: '120' },
];

const ReportClasses = () => {
  const [classes, setClasses] = useState(classesData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editClass, setEditClass] = useState(null);

  const handleEdit = (cls) => {
    setEditClass(cls);
    setShowEditModal(true);
  };

  const handleSave = (editedClass) => {
    const updatedClasses = classes.map((cls) =>
      cls.id === editedClass.id ? editedClass : cls
    );
    setClasses(updatedClasses);
    setShowEditModal(false);
  };

  const handleDelete = (classId) => {
    const updatedClasses = classes.filter((cls) => cls.id !== classId);
    setClasses(updatedClasses);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditClass(null);
  };

  return (
    <div>
      <h2>Classes Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Teacher</th>
            <th>Room Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={cls.id}>
              <td>{index + 1}</td>
              <td>{cls.name}</td>
              <td>{cls.teacher}</td>
              <td>{cls.room}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(cls)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(cls.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formClassName">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editClass ? editClass.name : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formClassTeacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editClass ? editClass.teacher : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formClassRoom">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editClass ? editClass.room : ''}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editClass)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportClasses;
