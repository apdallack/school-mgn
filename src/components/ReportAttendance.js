import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const attendanceData = [
  { id: 1, studentName: 'Ahmed Ali', date: '2024-07-01', status: 'present' },
  { id: 2, studentName: 'Fatima Hussein', date: '2024-07-01', status: 'absent' },
  { id: 3, studentName: 'Mohamed Hassan', date: '2024-07-01', status: 'present' },
  { id: 4, studentName: 'Ayan Farah', date: '2024-07-01', status: 'absent' },
  { id: 5, studentName: 'Yusuf Ibrahim', date: '2024-07-01', status: 'present' },
  { id: 6, studentName: 'Khadija Abdullahi', date: '2024-07-01', status: 'absent' },
  { id: 7, studentName: 'Abdirahman Ahmed', date: '2024-07-01', status: 'present' },
  { id: 8, studentName: 'Layla Ali', date: '2024-07-01', status: 'absent' },
  { id: 9, studentName: 'Ismail Mohamed', date: '2024-07-01', status: 'present' },
  { id: 10, studentName: 'Hamdi Hassan', date: '2024-07-01', status: 'absent' },
  { id: 11, studentName: 'Zahra Yusuf', date: '2024-07-01', status: 'present' },
  { id: 12, studentName: 'Ali Ibrahim', date: '2024-07-01', status: 'absent' },
  { id: 13, studentName: 'Maryam Hussein', date: '2024-07-01', status: 'present' },
  { id: 14, studentName: 'Abdi Abdullahi', date: '2024-07-01', status: 'absent' },
  { id: 15, studentName: 'Nasra Ahmed', date: '2024-07-01', status: 'present' },
  { id: 16, studentName: 'Farah Ali', date: '2024-07-01', status: 'absent' },
  { id: 17, studentName: 'Hassan Mohamed', date: '2024-07-01', status: 'present' },
  { id: 18, studentName: 'Asha Hassan', date: '2024-07-01', status: 'absent' },
  { id: 19, studentName: 'Salma Yusuf', date: '2024-07-01', status: 'present' },
  { id: 20, studentName: 'Omar Ibrahim', date: '2024-07-01', status: 'absent' },
  { id: 21, studentName: 'Muna Abdullahi', date: '2024-07-01', status: 'present' },
  { id: 22, studentName: 'Ibrahim Ahmed', date: '2024-07-01', status: 'absent' },
  { id: 23, studentName: 'Halima Ali', date: '2024-07-01', status: 'present' },
  { id: 24, studentName: 'Abdullahi Mohamed', date: '2024-07-01', status: 'absent' },
  { id: 25, studentName: 'Asma Hassan', date: '2024-07-01', status: 'present' },
  { id: 26, studentName: 'Faysal Yusuf', date: '2024-07-01', status: 'absent' },
  { id: 27, studentName: 'Sahra Ibrahim', date: '2024-07-01', status: 'present' },
  { id: 28, studentName: 'Bilal Abdullahi', date: '2024-07-01', status: 'absent' },
  { id: 29, studentName: 'Amina Ahmed', date: '2024-07-01', status: 'present' },
  { id: 30, studentName: 'Jibril Ali', date: '2024-07-01', status: 'absent' },
  { id: 31, studentName: 'Hibo Mohamed', date: '2024-07-01', status: 'present' },
  { id: 32, studentName: 'Khalid Hassan', date: '2024-07-01', status: 'absent' },
  { id: 33, studentName: 'Ruqiya Yusuf', date: '2024-07-01', status: 'present' },
  { id: 34, studentName: 'Hodan Ibrahim', date: '2024-07-01', status: 'absent' },
  { id: 35, studentName: 'Saed Abdullahi', date: '2024-07-01', status: 'present' },
  { id: 36, studentName: 'Samira Ahmed', date: '2024-07-01', status: 'absent' },
  { id: 37, studentName: 'Liban Ali', date: '2024-07-01', status: 'present' },
  { id: 38, studentName: 'Habiba Mohamed', date: '2024-07-01', status: 'absent' },
  { id: 39, studentName: 'Faduma Hassan', date: '2024-07-01', status: 'present' },
  { id: 40, studentName: 'Bashir Yusuf', date: '2024-07-01', status: 'absent' },
  { id: 41, studentName: 'Yasmin Ibrahim', date: '2024-07-01', status: 'present' },
  { id: 42, studentName: 'Mohamud Abdullahi', date: '2024-07-01', status: 'absent' },
  { id: 43, studentName: 'Sumaya Ahmed', date: '2024-07-01', status: 'present' },
  { id: 44, studentName: 'Fawzia Ali', date: '2024-07-01', status: 'absent' },
  { id: 45, studentName: 'Khadra Mohamed', date: '2024-07-01', status: 'present' },
  { id: 46, studentName: 'Nadifa Hassan', date: '2024-07-01', status: 'absent' },
  { id: 47, studentName: 'Abdikarim Yusuf', date: '2024-07-01', status: 'present' },
  { id: 48, studentName: 'Hani Ibrahim', date: '2024-07-01', status: 'absent' },
  { id: 49, studentName: 'Salim Abdullahi', date: '2024-07-01', status: 'present' },
  { id: 50, studentName: 'Hodan Ahmed', date: '2024-07-01', status: 'absent' },
];

const ReportAttendance = () => {
  const [attendance, setAttendance] = useState(attendanceData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editAttendance, setEditAttendance] = useState(null);

  const handleEdit = (attendanceRecord) => {
    setEditAttendance(attendanceRecord);
    setShowEditModal(true);
  };

  const handleSave = (editedAttendance) => {
    const updatedAttendance = attendance.map((record) =>
      record.id === editedAttendance.id ? editedAttendance : record
    );
    setAttendance(updatedAttendance);
    setShowEditModal(false);
  };

  const handleDelete = (attendanceId) => {
    const updatedAttendance = attendance.filter((record) => record.id !== attendanceId);
    setAttendance(updatedAttendance);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditAttendance(null);
  };

  return (
    <div>
      <h2>Attendance Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{record.studentName}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(record)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editAttendance ? editAttendance.studentName : ''}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formAttendanceDate">
              <Form.Label>Attendance Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={editAttendance ? editAttendance.date : ''}
              />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue={editAttendance ? editAttendance.status : ''}
                onChange={(e) => setEditAttendance({ ...editAttendance, status: e.target.value })}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editAttendance)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportAttendance;
