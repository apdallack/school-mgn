 import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const studentsData = [
  { id: 1, name: 'Ahmed Ali', email: 'ahmed.ali@example.com', age: 18, grade: 'Grade 10', address: '789 Cedar Ave', phone: '345-678-9012' },
  { id: 2, name: 'Fatima Hussein', email: 'fatima.hussein@example.com', age: 17, grade: 'Grade 9', address: '890 Pine St', phone: '456-789-0123' },
  { id: 3, name: 'Mohamed Hassan', email: 'mohamed.hassan@example.com', age: 16, grade: 'Grade 8', address: '567 Oak Ave', phone: '567-890-1234' },
  { id: 4, name: 'Ayan Farah', email: 'ayan.farah@example.com', age: 15, grade: 'Grade 7', address: '678 Maple St', phone: '678-901-2345' },
  { id: 5, name: 'Yusuf Ibrahim', email: 'yusuf.ibrahim@example.com', age: 14, grade: 'Grade 6', address: '345 Birch Ave', phone: '789-012-3456' },
  { id: 6, name: 'Khadija Abdullahi', email: 'khadija.abdullahi@example.com', age: 13, grade: 'Grade 5', address: '456 Pine St', phone: '890-123-4567' },
  { id: 7, name: 'Abdirahman Ahmed', email: 'abdirahman.ahmed@example.com', age: 12, grade: 'Grade 4', address: '234 Elm Ave', phone: '901-234-5678' },
  { id: 8, name: 'Layla Ali', email: 'layla.ali@example.com', age: 11, grade: 'Grade 3', address: '123 Oak St', phone: '012-345-6789' },
  { id: 9, name: 'Ismail Mohamed', email: 'ismail.mohamed@example.com', age: 10, grade: 'Grade 2', address: '567 Cedar Ave', phone: '123-456-7890' },
  { id: 10, name: 'Hamdi Hassan', email: 'hamdi.hassan@example.com', age: 9, grade: 'Grade 1', address: '789 Maple St', phone: '234-567-8901' },
  { id: 11, name: 'Zahra Yusuf', email: 'zahra.yusuf@example.com', age: 8, grade: 'Kindergarten', address: '890 Elm Ave', phone: '345-678-9012' },
  { id: 12, name: 'Ali Ibrahim', email: 'ali.ibrahim@example.com', age: 7, grade: 'Kindergarten', address: '234 Pine St', phone: '456-789-0123' },
  { id: 13, name: 'Maryam Hussein', email: 'maryam.hussein@example.com', age: 6, grade: 'Preschool', address: '678 Cedar Ave', phone: '567-890-1234' },
  { id: 14, name: 'Abdi Abdullahi', email: 'abdi.abdullahi@example.com', age: 5, grade: 'Preschool', address: '789 Oak St', phone: '678-901-2345' },
  { id: 15, name: 'Nasra Ahmed', email: 'nasra.ahmed@example.com', age: 4, grade: 'Preschool', address: '345 Maple Ave', phone: '789-012-3456' },
  { id: 16, name: 'Farah Ali', email: 'farah.ali@example.com', age: 17, grade: 'Grade 12', address: '456 Birch St', phone: '890-123-4567' },
  { id: 17, name: 'Hassan Mohamed', email: 'hassan.mohamed@example.com', age: 16, grade: 'Grade 11', address: '567 Cedar Ave', phone: '901-234-5678' },
  { id: 18, name: 'Asha Hassan', email: 'asha.hassan@example.com', age: 15, grade: 'Grade 10', address: '678 Elm St', phone: '012-345-6789' },
  { id: 19, name: 'Salma Yusuf', email: 'salma.yusuf@example.com', age: 14, grade: 'Grade 9', address: '789 Oak Ave', phone: '123-456-7890' },
  { id: 20, name: 'Omar Ibrahim', email: 'omar.ibrahim@example.com', age: 13, grade: 'Grade 8', address: '890 Pine St', phone: '234-567-8901' },
  { id: 21, name: 'Muna Abdullahi', email: 'muna.abdullahi@example.com', age: 12, grade: 'Grade 7', address: '456 Maple Ave', phone: '345-678-9012' },
  { id: 22, name: 'Ibrahim Ahmed', email: 'ibrahim.ahmed@example.com', age: 11, grade: 'Grade 6', address: '567 Cedar St', phone: '456-789-0123' },
  { id: 23, name: 'Halima Ali', email: 'halima.ali@example.com', age: 10, grade: 'Grade 5', address: '678 Elm Ave', phone: '567-890-1234' },
  { id: 24, name: 'Abdullahi Mohamed', email: 'abdullahi.mohamed@example.com', age: 9, grade: 'Grade 4', address: '789 Pine St', phone: '678-901-2345' },
  { id: 25, name: 'Asma Hassan', email: 'asma.hassan@example.com', age: 8, grade: 'Grade 3', address: '890 Cedar Ave', phone: '789-012-3456' },
  { id: 26, name: 'Faysal Yusuf', email: 'faysal.yusuf@example.com', age: 7, grade: 'Grade 2', address: '123 Oak St', phone: '890-123-4567' },
  { id: 27, name: 'Sahra Ibrahim', email: 'sahra.ibrahim@example.com', age: 6, grade: 'Grade 1', address: '234 Cedar Ave', phone: '901-234-5678' },
  { id: 28, name: 'Bilal Abdullahi', email: 'bilal.abdullahi@example.com', age: 5, grade: 'Kindergarten', address: '345 Elm St', phone: '012-345-6789' },
  { id: 29, name: 'Amina Ahmed', email: 'amina.ahmed@example.com', age: 4, grade: 'Kindergarten', address: '456 Pine Ave', phone: '123-456-7890' },
  { id: 30, name: 'Jibril Ali', email: 'jibril.ali@example.com', age: 18, grade: 'Grade 12', address: '567 Maple St', phone: '234-567-8901' },
  { id: 31, name: 'Hibo Mohamed', email: 'hibo.mohamed@example.com', age: 17, grade: 'Grade 11', address: '678 Cedar Ave', phone: '345-678-9012' },
  { id: 32, name: 'Khalid Hassan', email: 'khalid.hassan@example.com', age: 16, grade: 'Grade 10', address: '789 Elm St', phone: '456-789-0123' },
  { id: 33, name: 'Ruqiya Yusuf', email: 'ruqiya.yusuf@example.com', age: 15, grade: 'Grade 9', address: '890 Oak Ave', phone: '567-890-1234' },
  { id: 34, name: 'Hodan Ibrahim', email: 'hodan.ibrahim@example.com', age: 14, grade: 'Grade 8', address: '123 Pine St', phone: '678-901-2345' },
  { id: 35, name: 'Saed Abdullahi', email: 'saed.abdullahi@example.com', age: 13, grade: 'Grade 7', address: '234 Cedar Ave', phone: '789-012-3456' },
  { id: 36, name: 'Samira Ahmed', email: 'samira.ahmed@example.com', age: 12, grade: 'Grade 6', address: '345 Elm St', phone: '890-123-4567' },
];

const StudentReport = () => {
  const [students, setStudents] = useState(studentsData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const handleEdit = (student) => {
    setEditStudent(student);
    setShowEditModal(true);
  };

  const handleSave = (editedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id ? editedStudent : student
    );
    setStudents(updatedStudents);
    setShowEditModal(false);
  };

  const handleDelete = (studentId) => {
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditStudent(null);
  };

  return (
    <div>
      <h2>Student Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              
              <td>
                <Button variant="info" onClick={() => handleEdit(student)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(student.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editStudent ? editStudent.name : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={editStudent ? editStudent.email : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                defaultValue={editStudent ? editStudent.age : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                as="select"
                defaultValue={editStudent ? editStudent.grade : ''}
                disabled
              >
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editStudent)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentReport;
