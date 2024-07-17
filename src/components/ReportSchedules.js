 import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const schedulesData = [
  { id: 1, eventName: 'Parent-Teacher Meeting', date: '2024-07-01', time: '15:00', location: 'Conference Hall' },
  { id: 2, eventName: 'Student Council Elections', date: '2024-07-03', time: '11:00', location: 'Auditorium' },
  { id: 3, eventName: 'Science Fair', date: '2024-07-05', time: '09:00', location: 'Science Lab' },
  { id: 4, eventName: 'Field Trip - Zoo Visit', date: '2024-07-07', time: '08:30', location: 'Zoo' },
  { id: 5, eventName: 'Career Day', date: '2024-07-09', time: '13:00', location: 'Gymnasium' },
  { id: 6, eventName: 'Sports Day - Football Tournament', date: '2024-07-11', time: '10:00', location: 'Sports Ground' },
  { id: 7, eventName: 'Art Exhibition', date: '2024-07-13', time: '15:30', location: 'Art Room' },
  { id: 8, eventName: 'Music Recital', date: '2024-07-15', time: '14:00', location: 'Music Hall' },
  { id: 9, eventName: 'School Play - "Romeo and Juliet"', date: '2024-07-17', time: '18:00', location: 'Auditorium' },
  { id: 10, eventName: 'Math Olympiad', date: '2024-07-19', time: '11:00', location: 'Classroom 301' },
  { id: 11, eventName: 'Community Service Day', date: '2024-07-21', time: '09:30', location: 'Local Park' },
  { id: 12, eventName: 'Library Week - Book Fair', date: '2024-07-23', time: '12:00', location: 'Library' },
  { id: 13, eventName: 'Graduation Ceremony', date: '2024-07-25', time: '16:00', location: 'Auditorium' },
  { id: 14, eventName: 'Drama Club Performance', date: '2024-07-27', time: '17:00', location: 'Auditorium' },
  { id: 15, eventName: 'Debate Competition', date: '2024-07-29', time: '14:30', location: 'Classroom 401' },
  { id: 16, eventName: 'Science Quiz', date: '2024-07-31', time: '10:30', location: 'Science Lab' },
  { id: 17, eventName: 'Student Talent Show', date: '2024-08-02', time: '15:00', location: 'Gymnasium' },
  { id: 18, eventName: 'Teacher Development Workshop', date: '2024-08-04', time: '09:00', location: 'Staff Room' },
  { id: 19, eventName: 'Holiday Celebration - Independence Day', date: '2024-08-06', time: '12:00', location: 'School Grounds' },
  { id: 20, eventName: 'Exam Week Begins', date: '2024-08-08', time: '08:00', location: 'Classrooms' },
];


const ReportSchedules = () => {
  const [schedules, setSchedules] = useState(schedulesData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);

  const handleEdit = (schedule) => {
    setEditSchedule(schedule);
    setShowEditModal(true);
  };

  const handleSave = (editedSchedule) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === editedSchedule.id ? editedSchedule : schedule
    );
    setSchedules(updatedSchedules);
    setShowEditModal(false);
  };

  const handleDelete = (scheduleId) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== scheduleId);
    setSchedules(updatedSchedules);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditSchedule(null);
  };

  return (
    <div>
      <h2>Schedules Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={schedule.id}>
              <td>{index + 1}</td>
              <td>{schedule.eventName}</td>
              <td>{schedule.date}</td>
              <td>{schedule.time}</td>
              <td>{schedule.location}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(schedule)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(schedule.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editSchedule ? editSchedule.eventName : ''}
                onChange={(e) => setEditSchedule({ ...editSchedule, eventName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={editSchedule ? editSchedule.date : ''}
                onChange={(e) => setEditSchedule({ ...editSchedule, date: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                defaultValue={editSchedule ? editSchedule.time : ''}
                onChange={(e) => setEditSchedule({ ...editSchedule, time: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editSchedule ? editSchedule.location : ''}
                onChange={(e) => setEditSchedule({ ...editSchedule, location: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(editSchedule)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportSchedules;
